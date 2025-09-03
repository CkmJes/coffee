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




  document.addEventListener('DOMContentLoaded', function () {
    // Render lucide icons
    if (window.lucide && lucide.createIcons) {
      lucide.createIcons();
    }

    const categorySelect = document.getElementById('category');
    const subcategoryGroup = document.getElementById('subcategoryGroup');
    const subcategorySelect = document.getElementById('subcategory');
    const form = document.getElementById('supportForm');
    const formMessage = document.getElementById('formMessage');

    // Map of subcategories by category
    const SUBCATEGORIES = {
      order: [
        { value: 'status', label: 'new order' },
        { value: 'cancel', label: 'Change order ' },
        { value: 'modify', label: 'Update contact info / Delivery Address' },
        { value: 'missing', label: 'Damaged Product Received' },
        { value: 'order', label: 'Cancel Order' },
        { value: 'issue', label: 'Packing Issue' },
        { value: 'complaint', label: 'Coffee Complaint' },
        { value: 'placement', label: 'Order Placement Issue / Query' },
      ],
      shipping: [
        { value: 'track', label: 'Delivery Delayed' },
        { value: 'update', label: 'status Update' },
        { value: 'request', label: 'Request Priority Not Received' },
        { value: 'tracking', label: 'Tracking Details Not Received' },
        { value: 'courier', label: 'Courier Preference' },
        { value: 'dispatch', label: 'Delayed Dispatch' },
        { value: 'returned', label: 'Order Returned' },
        { value: 'tracker', label: 'Courier Tracker Not Updated' },
        { value: 'received', label: 'Tracker Shows Delivered, But Order Not Received' },
        { value: 'inquiry', label: 'International Shipping Inquiry' },
        { value: 'change', label: 'Change Delivery Slot' },
        { value: 'unserviceable', label: 'Location Unserviceable' },
        { value: 'services', label: 'services Update' },
        { value: 'appreciation', label: 'Courier Partner Appreciation' },
        { value: 'reattempt', label: 'Reattempt Delivery Request' },
        { value: 'Other', label: 'Others' },
      ],
      payment: [
        { value: 'failed', label: 'Payment Deducted, But Order Not Confirmed' },
        { value: 'refund', label: 'Payment Declined' },
        { value: 'invoice', label: 'Refund Related' },
        { value: 'billing', label: 'Change in Billing Details' },
        { value: 'invoice', label: 'B2c GST Invoice Request' },
        { value: 'bill', label: 'Invoice / Bill Request' },
        { value: 'receipt', label: 'Payment Receipt / Proof' },
        { value: 'double', label: 'Double Payment Deducted' },
        { value: 'link', label: 'Payment Link Request' },
        { value: 'available', label: 'COD Available' },
        { value: 'other', label: 'Others' },
      ],
      b2b: [
        { value: 'bulk', label: 'Bulk Order Inquiry' },
        { value: 'custom', label: 'Franchisee Inquiry' },
        { value: 'reseller', label: 'New B2B Order' },
        { value: 'partnership', label: 'Distribution / Reseller Inquiry' },
        { value: 'reseller', label: 'E-Commerce / Online Platform Partnership' },
      ],
      other: [
        { value: 'general', label: 'General Question' },
        { value: 'feedback', label: 'Feedback' },
        { value: 'complaint', label: 'Complaint' },
      ]
    };

    function populateSubcategories(category) {
      // Reset options
      subcategorySelect.innerHTML = '<option value="">-- Select Subcategory --</option>';

      const options = SUBCATEGORIES[category] || [];
      if (category && options.length) {
        options.forEach(opt => {
          const o = document.createElement('option');
          o.value = opt.value;
          o.textContent = opt.label;
          subcategorySelect.appendChild(o);
        });
        subcategoryGroup.style.display = 'block';
        subcategorySelect.setAttribute('required', 'required');
      } else {
        subcategoryGroup.style.display = 'none';
        subcategorySelect.removeAttribute('required');
      }
      subcategorySelect.value = '';
    }

    // Initial render (in case of back navigation or pre-filled form)
    populateSubcategories(categorySelect.value);

    // On category change
    categorySelect.addEventListener('change', function () {
      populateSubcategories(this.value);
    });

    // Optional: client-side guard to show a friendly message
    form.addEventListener('submit', function (e) {
      formMessage.textContent = '';
      // If subcategory is visible, ensure user chose one
      if (subcategoryGroup.style.display !== 'none' && !subcategorySelect.value) {
        e.preventDefault();
        formMessage.textContent = 'Please select a subcategory.';
      }
    });
  });


  
