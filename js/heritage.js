document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for animation
  const aboutSection = document.querySelector(".about-section");
  if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    observer.observe(aboutSection);
  }

  // Fetch the heritage HTML
  fetch('pages/heritage.html')
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then(html => {
      const heritageContainer = document.getElementById('heritage-container');
      if (heritageContainer) {
        heritageContainer.innerHTML = html;
      } else {
        console.error("Element with ID 'heritage-container' not found.");
      }
    })
    .catch(err => console.error('Error loading heritage section:', err));
});
