// Initialisation de AOS pour les animations au scroll
AOS.init({ once: true });

// GSAP - Animations pour la section Hero
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, delay: 0.5 });
gsap.from(".hero p", { duration: 1, y: -50, opacity: 0, delay: 1 });
gsap.from(".hero .btn", { duration: 1, y: -50, opacity: 0, delay: 1.5 });

// Fonctionnalité du menu mobile
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});
closeMenu.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});

// Changement du style du header lors du scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Effet parallax/animation sur chaque section avec GSAP ScrollTrigger
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    ease: "power2.out"
  });
});
