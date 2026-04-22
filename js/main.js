/* ═══════════════════════════════════════════
   CME DETAILING — SHARED JAVASCRIPT
═══════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger / Mobile Menu ──
  const ham = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (ham && mobileMenu) {
    ham.addEventListener('click', () => {
      const open = ham.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        ham.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Scroll Reveal ──
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => obs.observe(el));
  }

  // ── Active Nav Link ──
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (href.includes(currentPage) || (currentPage === 'index.html' && href === 'index.html'))) {
      a.classList.add('active');
    }
  });

  // ── Enquiry Form ──
  const form = document.getElementById('enquiry-form');
  if (form) {
    const fileInput = document.getElementById('form-attachments');
    const fileNames = document.getElementById('file-names');
    if (fileInput && fileNames) {
      fileInput.addEventListener('change', () => {
        const names = Array.from(fileInput.files).map(f => f.name).join(', ');
        fileNames.textContent = names ? `📎 ${names}` : '';
      });
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit-btn');
      const msg = document.getElementById('form-success');
      if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
      setTimeout(() => {
        if (msg) msg.style.display = 'block';
        if (btn) { btn.textContent = 'Message Sent ✓'; }
        form.reset();
        if (fileNames) fileNames.textContent = '';
      }, 1200);
    });
  }

  // ── Lightbox ──
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  if (lightbox && lightboxImg) {
    window.openLightbox = function(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    window.closeLightbox = function() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      setTimeout(() => { lightboxImg.src = ''; }, 300);
    };
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

});
