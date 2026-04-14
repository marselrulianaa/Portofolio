package handlers

import (
	"html/template"
	"log"
	"net/http"
	"path/filepath"
)

var tmpl *template.Template

// InitTemplates parses all templates from the given directory.
func InitTemplates(dir string) error {
	pattern := filepath.Join(dir, "*.html")
	t, err := template.ParseGlob(pattern)
	if err != nil {
		return err
	}
	tmpl = t
	return nil
}

// HomeHandler serves the main portfolio page.
func HomeHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	if err := tmpl.ExecuteTemplate(w, "layout.html", nil); err != nil {
		log.Printf("[HOME] template error: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
	}
}
