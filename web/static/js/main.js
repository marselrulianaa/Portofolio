// ============================================================
// main.js — Marsel Ruliana Hermawan Portfolio
// ============================================================

(function () {
  'use strict';

  // ── Language Translations ──────────────────────────────────
  const translations = {
    id: {
      'nav.projects': 'Proyek',
      'nav.skills': 'Keahlian',
      'nav.about': 'Tentang',
      'nav.contact': 'Kontak',
      'nav.cta': 'Hubungi Saya',
      'hero.badge': 'Backend Golang & UI/UX Designer',
      'hero.greeting': 'Halo, saya',
      'hero.sub': 'Saya membangun sistem backend yang cepat, aman, dan mudah di-scale — dengan desain UI/UX yang rapi.',
      'hero.cta1': 'Hubungi Saya',
      'hero.cta2': 'Lihat Proyek',
      'stat.projects': 'Proyek Selesai',
      'stat.years': 'Tahun Pengalaman',
      'stat.stack': 'Stack Andalan',
      'projects.tag': 'Portfolio',
      'projects.title': 'Proyek Unggulan',
      'projects.sub': 'Beberapa proyek yang telah saya kerjakan dengan penuh dedikasi.',
      'card.uiux': 'UI/UX Design',
      'card.system': 'Sistem Informasi',
      'project1.desc': 'Desain antarmuka command center untuk keperluan operasional TNI Angkatan Laut — dashboard monitoring, navigasi intuitif, dan visual data real-time.',
      'project2.desc': 'Sistem Pengelolaan Pesat untuk SATPOL PP — aplikasi manajemen internal yang membantu pengelolaan data dan pelaporan operasional secara efisien.',
      'project3.desc': 'Sistem informasi terintegrasi untuk SATPOL PP — dirancang untuk mempercepat alur kerja, pelaporan lapangan, dan koordinasi antar unit secara digital.',
      'status.done': '✓ Selesai',
      'skills.tag': 'Stack',
      'skills.title': 'Keahlian & Teknologi',
      'skills.sub': 'Tools dan teknologi yang saya gunakan sehari-hari.',
      'skills.backend': 'Backend',
      'skills.design': 'UI/UX Design',
      'skills.infra': 'DevOps & Infra',
      'about.tag': 'Tentang Saya',
      'about.title': 'Dua Dunia, Satu Tujuan',
      'about.role': 'Backend & UI/UX',
      'about.p1': 'Saya adalah seorang <strong>Backend Developer Golang</strong> sekaligus <strong>UI/UX Designer</strong> — perpaduan langka yang memungkinkan saya membangun produk yang tidak hanya berfungsi dengan baik, tetapi juga terasa menyenangkan untuk digunakan.',
      'about.p2': 'Dengan pengalaman di proyek pemerintahan (TNI AL, SATPOL PP), saya terbiasa bekerja dalam lingkungan yang menuntut keandalan tinggi, keamanan data, dan antarmuka yang intuitif bahkan untuk pengguna non-teknis.',
      'value1.title': 'Performa Tinggi',
      'value1.desc': 'Backend yang cepat & scalable',
      'value2.title': 'Keamanan Utama',
      'value2.desc': 'Kode yang aman & terpercaya',
      'value3.title': 'Desain Berpusat User',
      'value3.desc': 'UI yang intuitif & accessible',
      'contact.tag': 'Kontak',
      'contact.title': 'Mari Berkolaborasi',
      'contact.sub': 'Punya proyek menarik? Saya siap membantu mewujudkannya.',
      'contact.email.label': 'Email',
      'form.name': 'Nama',
      'form.email': 'Email',
      'form.message': 'Pesan',
      'form.submit': 'Kirim Pesan',
      'form.sending': 'Mengirim...',
      'footer.rights': 'All rights reserved.',
      'footer.built': 'Dibangun dengan Go + ♥',
    },
    en: {
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.about': 'About',
      'nav.contact': 'Contact',
      'nav.cta': 'Contact Me',
      'hero.badge': 'Backend Golang & UI/UX Designer',
      'hero.greeting': "Hi, I'm",
      'hero.sub': 'I build fast, secure, scalable backends — with clean UI/UX design.',
      'hero.cta1': 'Contact Me',
      'hero.cta2': 'View Projects',
      'stat.projects': 'Projects Done',
      'stat.years': 'Years Experience',
      'stat.stack': 'Core Stack',
      'projects.tag': 'Portfolio',
      'projects.title': 'Featured Projects',
      'projects.sub': 'A selection of projects I have worked on with full dedication.',
      'card.uiux': 'UI/UX Design',
      'card.system': 'Information System',
      'project1.desc': 'Command center interface design for the Indonesian Navy — monitoring dashboard, intuitive navigation, and real-time data visualisation.',
      'project2.desc': 'Internal management system for SATPOL PP — helps manage operational data and reporting efficiently.',
      'project3.desc': 'Integrated information system for SATPOL PP — designed to speed up workflows, field reporting, and inter-unit coordination digitally.',
      'status.done': '✓ Completed',
      'skills.tag': 'Stack',
      'skills.title': 'Skills & Technologies',
      'skills.sub': 'Tools and technologies I use every day.',
      'skills.backend': 'Backend',
      'skills.design': 'UI/UX Design',
      'skills.infra': 'DevOps & Infra',
      'about.tag': 'About Me',
      'about.title': 'Two Worlds, One Goal',
      'about.role': 'Backend & UI/UX',
      'about.p1': "I'm a <strong>Golang Backend Developer</strong> and <strong>UI/UX Designer</strong> — a rare combination that lets me build products that not only work well, but also feel great to use.",
      'about.p2': "With experience in government projects (Indonesian Navy, SATPOL PP), I'm used to working in environments that demand high reliability, data security, and intuitive interfaces even for non-technical users.",
      'value1.title': 'High Performance',
      'value1.desc': 'Fast & scalable backend',
      'value2.title': 'Security First',
      'value2.desc': 'Safe & trustworthy code',
      'value3.title': 'User-Centred Design',
      'value3.desc': 'Intuitive & accessible UI',
      'contact.tag': 'Contact',
      'contact.title': "Let's Collaborate",
      'contact.sub': "Have an exciting project? I'm ready to help bring it to life.",
      'contact.email.label': 'Email',
      'form.name': 'Name',
      'form.email': 'Email',
      'form.message': 'Message',
      'form.submit': 'Send Message',
      'form.sending': 'Sending...',
      'footer.rights': 'All rights reserved.',
      'footer.built': 'Built with Go + ♥',
    },
  };

  let currentLang = 'id';

  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        // Use innerHTML for keys that contain HTML (about.p1, about.p2)
        if (key === 'about.p1' || key === 'about.p2') {
          el.innerHTML = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Update placeholder texts
    const msgInput = document.getElementById('message');
    if (msgInput) {
      msgInput.placeholder = lang === 'id'
        ? 'Halo Marsel, saya ingin berdiskusi mengenai...'
        : 'Hi Marsel, I would like to discuss...';
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  // ── Language Toggle ────────────────────────────────────────
  const langToggle = document.getElementById('langToggle');
  const langIdSpan = langToggle ? langToggle.querySelector('.lang-id') : null;
  const langEnSpan = langToggle ? langToggle.querySelector('.lang-en') : null;

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      currentLang = currentLang === 'id' ? 'en' : 'id';
      applyTranslations(currentLang);

      const isEN = currentLang === 'en';
      if (langIdSpan) langIdSpan.classList.toggle('active', !isEN);
      if (langEnSpan) langEnSpan.classList.toggle('active', isEN);
      langToggle.setAttribute('aria-pressed', String(isEN));
    });
  }

  // ── Mobile Hamburger ───────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ── Contact Form ───────────────────────────────────────────
  const form = document.getElementById('contactForm');
  const flash = document.getElementById('flashMessage');
  const submitBtn = document.getElementById('submitBtn');

  function showFlash(message, isSuccess) {
    if (!flash) return;
    flash.textContent = message;
    flash.className = 'flash-message ' + (isSuccess ? 'flash-success' : 'flash-error');
    flash.hidden = false;
    flash.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // Auto-hide after 6s
    setTimeout(function () { flash.hidden = true; }, 6000);
  }

  function setFieldError(fieldId, errorId, msg) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorId);
    if (field) field.classList.toggle('error', !!msg);
    if (errorEl) errorEl.textContent = msg || '';
  }

  function clearErrors() {
    setFieldError('name', 'nameError', '');
    setFieldError('email', 'emailError', '');
    setFieldError('message', 'messageError', '');
  }

  function validateForm(name, email, message) {
    let valid = true;
    const isId = currentLang === 'id';

    if (!name.trim()) {
      setFieldError('name', 'nameError', isId ? 'Nama wajib diisi.' : 'Name is required.');
      valid = false;
    }
    if (!email.trim()) {
      setFieldError('email', 'emailError', isId ? 'Email wajib diisi.' : 'Email is required.');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError('email', 'emailError', isId ? 'Format email tidak valid.' : 'Invalid email format.');
      valid = false;
    }
    if (!message.trim()) {
      setFieldError('message', 'messageError', isId ? 'Pesan wajib diisi.' : 'Message is required.');
      valid = false;
    }
    return valid;
  }

  function setLoading(loading) {
    if (!submitBtn) return;
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    submitBtn.disabled = loading;
    if (btnText) btnText.hidden = loading;
    if (btnLoading) btnLoading.hidden = !loading;
  }

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      clearErrors();
      flash.hidden = true;

      const name = form.name.value;
      const email = form.email.value;
      const message = form.message.value;

      if (!validateForm(name, email, message)) return;

      setLoading(true);

      try {
        const body = new URLSearchParams({ name, email, message });
        const res = await fetch('/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });

        const data = await res.json();

        if (data.success) {
          showFlash(data.message, true);
          form.reset();
        } else {
          showFlash(data.message, false);
        }
      } catch (err) {
        const isId = currentLang === 'id';
        showFlash(
          isId ? 'Terjadi kesalahan jaringan. Silakan coba lagi.' : 'Network error. Please try again.',
          false
        );
      } finally {
        setLoading(false);
      }
    });
  }

  // ── Footer Year ────────────────────────────────────────────
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── Smooth Navbar Shadow on Scroll ────────────────────────
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.style.background = 'rgba(10, 13, 20, 0.97)';
      } else {
        navbar.style.background = 'rgba(10, 13, 20, 0.85)';
      }
    }, { passive: true });
  }

  // ── Intersection Observer — Fade In cards ─────────────────
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.project-card, .value-item, .skill-group').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

})();
