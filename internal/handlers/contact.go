package handlers

import (
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

// rateLimitEntry holds the last request time and count for an IP.
type rateLimitEntry struct {
	count     int
	windowEnd time.Time
}

var (
	rateMu    sync.Mutex
	rateStore = make(map[string]*rateLimitEntry)
)

const (
	rateLimit  = 5             // max submissions per window
	rateWindow = time.Minute * 1
)

// Submission represents a contact form entry.
type Submission struct {
	Name      string `json:"name"`
	Email     string `json:"email"`
	Message   string `json:"message"`
	IP        string `json:"ip"`
	Timestamp string `json:"timestamp"`
}

// ContactResponse is returned as JSON.
type ContactResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

func getIP(r *http.Request) string {
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		parts := strings.Split(xff, ",")
		if len(parts) > 0 {
			return strings.TrimSpace(parts[0])
		}
	}
	ip, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		return r.RemoteAddr
	}
	return ip
}

func isRateLimited(ip string) bool {
	rateMu.Lock()
	defer rateMu.Unlock()

	now := time.Now()
	entry, exists := rateStore[ip]
	if !exists || now.After(entry.windowEnd) {
		rateStore[ip] = &rateLimitEntry{count: 1, windowEnd: now.Add(rateWindow)}
		return false
	}
	entry.count++
	return entry.count > rateLimit
}

// ContactHandler handles POST /contact form submissions.
func ContactHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		json.NewEncoder(w).Encode(ContactResponse{Success: false, Message: "Method not allowed"})
		return
	}

	ip := getIP(r)
	if isRateLimited(ip) {
		w.WriteHeader(http.StatusTooManyRequests)
		json.NewEncoder(w).Encode(ContactResponse{Success: false, Message: "Terlalu banyak permintaan. Coba lagi nanti."})
		return
	}

	if err := r.ParseForm(); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ContactResponse{Success: false, Message: "Invalid form data"})
		return
	}

	name := strings.TrimSpace(r.FormValue("name"))
	email := strings.TrimSpace(r.FormValue("email"))
	message := strings.TrimSpace(r.FormValue("message"))

	if name == "" || email == "" || message == "" {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ContactResponse{Success: false, Message: "Semua field wajib diisi."})
		return
	}

	if !strings.Contains(email, "@") || !strings.Contains(email, ".") {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(ContactResponse{Success: false, Message: "Format email tidak valid."})
		return
	}

	sub := Submission{
		Name:      name,
		Email:     email,
		Message:   message,
		IP:        ip,
		Timestamp: time.Now().UTC().Format(time.RFC3339),
	}

	log.Printf("[CONTACT] name=%q email=%q ip=%s", sub.Name, sub.Email, sub.IP)

	if err := saveSubmission(sub); err != nil {
		log.Printf("[CONTACT] error saving submission: %v", err)
	}

	json.NewEncoder(w).Encode(ContactResponse{Success: true, Message: "Pesan Anda telah terkirim! Saya akan segera menghubungi Anda."})
}

func saveSubmission(sub Submission) error {
	if err := os.MkdirAll("data", 0755); err != nil {
		return fmt.Errorf("mkdir data: %w", err)
	}

	f, err := os.OpenFile("data/submissions.jsonl", os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return fmt.Errorf("open file: %w", err)
	}
	defer f.Close()

	line, err := json.Marshal(sub)
	if err != nil {
		return fmt.Errorf("marshal: %w", err)
	}

	_, err = fmt.Fprintf(f, "%s\n", line)
	return err
}
