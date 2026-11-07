// Mobile Navigation
const btn = document.getElementById('menuBtn');
const menu = document.getElementById('mobileMenu');
if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden') === false;
    btn.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    })
  );
}

// Einblend-Animation beim Scrollen
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}

// Schatten am Header nach dem Scrollen
const header = document.querySelector('header');
const onScroll = () => header && header.classList.toggle('header-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// "Jetzt geöffnet"-Anzeige (Zeiten: Mo–Fr 09:00–18:30, Sa 09:00–18:00, So geschlossen)
const badge = document.querySelectorAll('[data-open-badge]');
if (badge.length) {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin' }));
  const day = now.getDay();
  const min = now.getHours() * 60 + now.getMinutes();
  const close = day >= 1 && day <= 5 ? 18 * 60 + 30 : day === 6 ? 18 * 60 : null;
  const open = close !== null && min >= 9 * 60 && min < close;
  badge.forEach((b) => {
    b.querySelector('[data-label]').textContent = open ? 'Jetzt geöffnet' : 'Zurzeit geschlossen';
    b.querySelector('[data-dot]').classList.toggle('bg-emerald-500', open);
    b.querySelector('[data-dot]').classList.toggle('bg-ink-600', !open);
  });
}
