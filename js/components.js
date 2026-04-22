/* ═══════════════════════════════════════════
   CME DETAILING — COMPONENTS
   Injects nav + footer into every page
═══════════════════════════════════════════ */

(function() {
  const BASE = document.querySelector('meta[name="base-path"]')?.content || '';

  // ── NAV ──
  const navHTML = `
  <div class="phone-bar">
    <a href="tel:+61416636310">📞 CALL LUCAS ON 0416 636 310!</a>
  </div>
  <nav class="navbar" id="navbar">
    <a href="${BASE}index.html" class="nav-logo">
      <img src="${BASE}assets/logo.png" alt="CME Detailing" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">
      <span style="display:none">CME<span class="dot">.</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="${BASE}index.html">Home</a></li>
      <li class="nav-dropdown">
        <a href="#">Services ▾</a>
        <ul class="dropdown-menu">
          <li><a href="${BASE}services/ceramic-coating.html">Ceramic Coating</a></li>
          <li><a href="${BASE}services/ppf.html">Paint Protection Film</a></li>
          <li><a href="${BASE}services/exterior-detailing.html">Exterior Detailing</a></li>
          <li><a href="${BASE}services/interior-detailing.html">Interior Detailing</a></li>
          <li><a href="${BASE}services/mobile-detailing.html">Mobile Detailing</a></li>
          <li><a href="${BASE}services/graphene-coating.html">Graphene Coating</a></li>
        </ul>
      </li>
      <li><a href="${BASE}gallery.html">Gallery</a></li>
      <li><a href="${BASE}contact.html">Contact</a></li>
      <li><a href="tel:+61416636310" class="nav-cta">📞 Call Now</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobile-menu">
    <ul>
      <li><a href="${BASE}index.html">Home</a></li>
      <li>
        <div class="mobile-sub-label">Our Services</div>
        <ul class="mobile-sub">
          <li><a href="${BASE}services/ceramic-coating.html">Ceramic Coating</a></li>
          <li><a href="${BASE}services/ppf.html">Paint Protection Film</a></li>
          <li><a href="${BASE}services/exterior-detailing.html">Exterior Detailing</a></li>
          <li><a href="${BASE}services/interior-detailing.html">Interior Detailing</a></li>
          <li><a href="${BASE}services/mobile-detailing.html">Mobile Detailing</a></li>
          <li><a href="${BASE}services/graphene-coating.html">Graphene Coating</a></li>
        </ul>
      </li>
      <li><a href="${BASE}gallery.html">Gallery</a></li>
      <li><a href="${BASE}contact.html">Contact Us</a></li>
    </ul>
    <a href="tel:+61416636310" class="mobile-cta-btn">📞 Call Lucas: 0416 636 310</a>
  </div>`;

  // ── FOOTER ──
  const footerHTML = `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo">CME<span class="dot">.</span></div>
        <p>Premium car detailing, paint protection film, and ceramic coatings across South West Sydney, Southern Highlands, and the Wollondilly Shire.</p>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <ul>
          <li><a href="${BASE}services/ceramic-coating.html">Ceramic Coating</a></li>
          <li><a href="${BASE}services/ppf.html">Paint Protective Film</a></li>
          <li><a href="${BASE}services/exterior-detailing.html">Exterior Detailing</a></li>
          <li><a href="${BASE}services/interior-detailing.html">Interior Detailing</a></li>
          <li><a href="${BASE}services/mobile-detailing.html">Mobile Detailing</a></li>
          <li><a href="${BASE}services/graphene-coating.html">Graphene Coating</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Navigate</h5>
        <ul>
          <li><a href="${BASE}index.html">Home</a></li>
          <li><a href="${BASE}gallery.html">Gallery</a></li>
          <li><a href="${BASE}contact.html">Contact Us</a></li>
          <li><a href="https://www.instagram.com/cme.detailing" target="_blank" rel="noopener">Instagram</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <div class="footer-contact-item"><span class="ico">📞</span><a href="tel:+61416636310">0416 636 310</a></div>
        <div class="footer-contact-item"><span class="ico">✉️</span><a href="mailto:cmedetailing1@gmail.com">cmedetailing1@gmail.com</a></div>
        <div class="footer-contact-item"><span class="ico">📍</span><span>4/6 Loftus St, Bowral NSW 2576</span></div>
        <div class="footer-contact-item"><span class="ico">🕐</span><span>Mon–Sat: 9am – 5pm</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 CME Detailing — All Rights Reserved.</p>
      <p>Serving <a href="#">South West Sydney</a> · <a href="#">Southern Highlands</a> · <a href="#">Wollondilly</a></p>
    </div>
  </footer>
  <div class="sticky-cta"><a href="tel:+61416636310">📞 Call Lucas: 0416 636 310</a></div>`;

  // Inject into page
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  if (header) header.innerHTML = navHTML;
  if (footer) footer.innerHTML = footerHTML;
})();
