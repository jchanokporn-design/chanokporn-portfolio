// Scroll-reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach((el) => revealObserver.observe(el));

// Safety net: guarantee content is never stuck invisible (slow devices,
// print/PDF export, screenshot tools, or scroll-restoration edge cases)
window.addEventListener('load', () => {
  setTimeout(() => {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }, 1800);
});

// Nav background on scroll + active link highlight
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section[id], footer[id]');
const navLinks = document.querySelectorAll('.nav__links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`.nav__links a[href="#${id}"]`);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach((l) => l.classList.remove('is-active'));
      link.classList.add('is-active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach((s) => sectionObserver.observe(s));

// Mobile menu toggle
const burger = document.getElementById('navBurger');
const navLinksWrap = document.getElementById('navLinks');
if (burger) {
  burger.addEventListener('click', () => {
    navLinksWrap.classList.toggle('is-open');
  });
  navLinksWrap.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => navLinksWrap.classList.remove('is-open'));
  });
}
