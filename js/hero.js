const heroBg = document.querySelector('.hero-bg');

// Parallax effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  heroBg.style.transform = `translateY(${scrollY * 0.5}px)`;
});

// Button actions
document.getElementById('shop-btn').addEventListener('click', () => {
  console.log('Switch to shop view'); 
  // Replace with your actual view-switching logic
});
