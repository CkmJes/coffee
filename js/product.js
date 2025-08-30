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



     const modal = document.getElementById("productModal");
  const openBtns = document.querySelectorAll(".open-modal-btn");
  const closeBtn = document.querySelector(".close-modal");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  function increaseQty() {
    let qty = document.querySelector(".qty");
    qty.value = parseInt(qty.value) + 1;
  }

  function decreaseQty() {
    let qty = document.querySelector(".qty");
    if (parseInt(qty.value) > 1) {
      qty.value = parseInt(qty.value) - 1;
    }
  }



  // Open modal with product data
    document.querySelectorAll(".open-modal-btn").forEach(btn => {
      btn.addEventListener("click", function() {
        document.getElementById("modalTitle").textContent = this.dataset.title;
        document.getElementById("modalPrice").textContent = this.dataset.price;
        document.getElementById("modalOldPrice").textContent = this.dataset.oldprice;
        document.getElementById("modalDesc").textContent = this.dataset.desc;
        document.getElementById("modalImg").src = this.dataset.img;
        document.getElementById("modalBlend").textContent = this.dataset.blend;
        document.getElementById("modalChar").textContent = this.dataset.char;

        document.querySelector(".qty").value = 1; // reset qty
        document.getElementById("productModal").style.display = "block";
      });
    });

    // Close modal
    document.querySelector(".close-modal").onclick = () => {
      document.getElementById("productModal").style.display = "none";
    };
    window.onclick = (e) => {
      if (e.target === document.getElementById("productModal")) {
        document.getElementById("productModal").style.display = "none";
      }
    };

    // Quantity functions
    function increaseQty() {
      let qty = document.querySelector(".qty");
      qty.value = parseInt(qty.value) + 1;
    }
    function decreaseQty() {
      let qty = document.querySelector(".qty");
      if (parseInt(qty.value) > 1) qty.value = parseInt(qty.value) - 1;
    }



    const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  const products = document.querySelectorAll(".product-cardd");

  function filterProducts() {
    const searchText = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    products.forEach(product => {
      const title = product.querySelector(".prottlt").innerText.toLowerCase();
      const productCategory = product.getAttribute("data-category");

      const matchesSearch = title.includes(searchText);
      const matchesCategory = category === "" || category === productCategory;

      if (matchesSearch && matchesCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  searchInput.addEventListener("input", filterProducts);
  categorySelect.addEventListener("change", filterProducts);
