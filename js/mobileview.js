const mobileMenu = document.getElementById('mobile-menu');
const mobileToggleBtn = document.getElementById('mobile-toggle'); // from previous code
const mobileLinks = document.querySelectorAll('.mobile-link');

let isMobileMenuOpen = false;

// Toggle mobile menu open/close
mobileToggleBtn.addEventListener('click', () => {
  isMobileMenuOpen = !isMobileMenuOpen;
  mobileMenu.classList.toggle('hidden', !isMobileMenuOpen);
  mobileToggleBtn.textContent = isMobileMenuOpen ? '✕' : '☰';
});

// Close menu when link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    isMobileMenuOpen = false;
    mobileMenu.classList.add('hidden');
    mobileToggleBtn.textContent = '☰';

    // Optional: Handle view switching (like React's setCurrentView)
    const view = link.dataset.view;
    if (view) {
      console.log(`Switching to ${view} view`);
      // Implement your view change logic here
    }
  });
});
