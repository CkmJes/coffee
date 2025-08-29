// Load choose.html into container
fetch('pages/contact.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('contact-container').innerHTML = html;

    // Attach click events after content is loaded
    document.querySelectorAll('.contact-card').forEach(card => {
      card.addEventListener('click', () => {
        const title = card.querySelector('.contact-card-title').textContent;
        alert(`You clicked on: ${title}`);
      });
    });
  })
  .catch(error => {
    console.error('Error loading choose.html:', error);
  });
