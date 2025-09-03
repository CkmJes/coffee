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


// emailjs.init("kowsalya0724@gmail.com"); 
//   document.getElementById("supportForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   let form = e.target;
//   fetch(form.action, {
//     method: form.method,
//     body: new FormData(form),
//     headers: { 'Accept': 'kowsalya0724@gmail.com' }
//   }).then(response => {
//     if (response.ok) {
//       document.getElementById("formMessage").textContent = "Message sent successfully!";
//       form.reset();
//     } else {
//       document.getElementById("formMessage").textContent = "Oops! Something went wrong.";
//     }
//   });
// });



document.getElementById("supportForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from submitting
  const form = e.target;

  // check if form is valid
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Show success message
  document.getElementById("formMessage").textContent = "Message sent successfully!";
  
  // Reset form
  form.reset();
});
