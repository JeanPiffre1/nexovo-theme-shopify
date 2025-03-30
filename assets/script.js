// Activation du menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});
menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Animation de révélation avec IntersectionObserver
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

reveals.forEach(element => {
  observer.observe(element);
});

// (Optionnel) GSAP pour animations complexes – assure-toi d'inclure le CDN GSAP dans le header si besoin
// Exemple d'animation GSAP pour le Hero (décommenter et adapter si souhaité) :
// gsap.from(".hero-content h1", { duration: 1.2, y: -80, opacity: 0, ease: "power3.out" });
// gsap.from(".hero-content p", { duration: 1.2, y: -50, opacity: 0, delay: 0.3, ease: "power3.out" });
// gsap.from(".hero-btn", { duration: 1.2, y: -50, opacity: 0, delay: 0.6, ease: "power3.out" });
