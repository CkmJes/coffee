// Cart logic
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
let itemCount = 0;

cartBtn.addEventListener('click', () => {
  itemCount++;
  cartCount.textContent = itemCount;
  cartCount.classList.remove('hidden');
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

mobileToggle.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  mobileMenu.classList.toggle('hidden', !isMenuOpen);
  mobileToggle.textContent = isMenuOpen ? '✖' : '☰';
});
// Change header background on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) { 
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
