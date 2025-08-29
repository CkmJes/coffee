// First load the choose.html content into #product-container
fetch('pages/choose.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('choose-container').innerHTML = html;

    // Now that #why-choose-grid exists in the DOM, populate it
    const whyChooseUs = [
      {
        title: "Chikkamagaluru's Finest Beans",
        description: "Sourced from lush coffee plantations, handpicked for rich aroma and signature flavor",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M18 8h1a4 4 0 1 1 0 8h-1"/>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"/>
                    <line x1="6" x2="6" y1="2" y2="4"/>
                    <line x1="10" x2="10" y1="2" y2="4"/>
                    <line x1="14" x2="14" y1="2" y2="4"/>
                 </svg>`
      },
      {
        title: "Strong Punch for Coffee Lovers",
        description: "Bold and energizing blends specially curated for true coffee enthusiasts",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 
                                     17 14.14 18.18 21.02 12 17.77 
                                     5.82 21.02 7 14.14 2 9.27 
                                     8.91 8.26 12 2"/>
                 </svg>`
      },
      {
        title: "Arabian Bean Excellence",
        description: "Smooth and exotic notes of premium Arabian beans, crafted to perfection",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="7"/>
                    <polyline points="8.21 13.89 7 23 12 20 
                                      17 23 15.79 13.88"/>
                 </svg>`
      },
      {
        title: "Perfect Brew Every Time",
        description: "Expert roasting techniques for balanced flavor profiles and luxurious finish",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10
                             a9 9 0 0 1 18 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                 </svg>`
      }
    ];

    const grid = document.getElementById("why-choose-grid");

    whyChooseUs.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-header">
          <div class="card-icon">${item.icon}</div>
          <div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.description}</p>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading choose.html:", err));
