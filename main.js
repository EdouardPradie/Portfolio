/* ──────────────────────────────────────────────────────────────────
   Portfolio – Edouard Pradie
   main.js
────────────────────────────────────────────────────────────────── */

/* ─── Mobile navigation toggle ─────────────────────────────────── */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* Close nav when a link is clicked on mobile */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ─── Scroll-reveal ─────────────────────────────────────────────── */
const revealTargets = [
  '.about-grid',
  '.skill-category',
  '.project-card',
  '.contact-inner > *',
];

revealTargets.forEach(selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.classList.add('reveal');
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ─── Header shadow on scroll ───────────────────────────────────── */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 8
    ? '0 4px 24px rgba(0,0,0,.5)'
    : 'none';
});

/* ─── Active nav link highlight ────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.querySelectorAll('a').forEach(a => {
          a.style.color = '';
        });
        const active = navLinks.querySelector(`a[href="#${entry.target.id}"]`);
        if (active) active.style.color = 'var(--clr-accent2)';
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach(s => navObserver.observe(s));
