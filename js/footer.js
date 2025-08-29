fetch('pages/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-container').innerHTML = html;

    // Now that the footer is loaded, attach event listeners
    document.querySelectorAll('.dc-social-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        alert(`You clicked on ${btn.textContent} icon!`);
      });
    });
  })
  .catch(error => {
    console.error('Error loading footer:', error);
  });
