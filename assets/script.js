// Menu toggle functionality
const menuToggle = document.getElementById('js-menu-toggle');
const menuOverlay = document.getElementById('js-menu-overlay');
const menuClose = document.getElementById('js-menu-close');
const navLinks = document.querySelectorAll('.menu-nav a');

function openMenu() {
  menuOverlay.classList.add('open');
}
function closeMenu() {
  menuOverlay.classList.remove('open');
}

// Open overlay on burger click
menuToggle.addEventListener('click', openMenu);
// Close on close button click
menuClose.addEventListener('click', closeMenu);
// Close menu when any nav link is clicked (for one-page navigation)
navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Scroll reveal animations using Intersection Observer
const revealElems = document.querySelectorAll('.reveal');
const observerOptions = { threshold: 0.2 };
const revealOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe each element with class 'reveal'
revealElems.forEach(elem => {
  revealOnScroll.observe(elem);
});
