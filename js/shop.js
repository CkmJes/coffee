// Sample product data (using icons instead of images)
const products = [
  { id: 1, name: "Perfect Brew", category: "perfectbrew", icon: "coffee" },
  { id: 2, name: "Dark Berry", category: "darkberry", icon: "coffee" },
  { id: 3, name: "Strong Punch", category: "strongpunch", icon: "coffee" },
  { id: 4, name: "Brown Gold", category: "brownglod", icon: "coffee" },
  { id: 4, name: "Arabian Bean", category: "aralianbean", icon: "coffee" }
];

const categories = ["All", ...new Set(products.map(p => p.category))];

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const productsGrid = document.getElementById("productsGrid");
const noResults = document.getElementById("noResults");

// Populate category dropdown
categories.forEach(cat => {
  const option = document.createElement("option");
  option.value = cat;
  option.textContent = cat;
  categorySelect.appendChild(option);
});

// Render products
function renderProducts(items) {
  productsGrid.innerHTML = "";
  if (items.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");

  items.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-icon"><i data-lucide="${product.icon}"></i></div>
      <div class="product-title">${product.name}</div>
      <div class="product-category">${product.category}</div>
    `;
    productsGrid.appendChild(card);
  });

  lucide.createIcons();
}

// Filter logic
function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  const filtered = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  renderProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);

// Initial render
renderProducts(products);

// Create static icons
lucide.createIcons();






document.querySelector('.quick-view').addEventListener('click', function () {
  alert('Quick View clicked!');
});
