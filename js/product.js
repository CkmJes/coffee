// Load product HTML dynamically
fetch('pages/product.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('product-container').innerHTML = html;

    // Now that the products are loaded, attach event listeners
    document.querySelectorAll(".add-to-cart").forEach(btn => {
      btn.addEventListener("click", () => {
        alert("Item added to cart!");
      });
    });
  })
  .catch(err => console.error('Error loading products:', err));
