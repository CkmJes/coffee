

// product 1 //

// Open modal
document.querySelectorAll(".quickViewModal1").forEach(button => {
  button.addEventListener("click", function () {
    // Example: you can grab product data from card here
    document.getElementById("modalImage").src = "./images/perfectbrew.png";
    document.getElementById("modalTitle").innerText = "Perfect Brew";
    document.getElementById("modalDesc").innerText = "Smooth, exotic & premium Arabian excellence. Experience the luxurious taste of carefully selected Arabian beans.";
    document.getElementById("modalPrice").innerText = "₹650";
    document.getElementById("modalOldPrice").innerText = "₹720";
    document.getElementById("modalRoast").innerText = "Medium";
    document.getElementById("modalOrigin").innerText = "Arabian Peninsula";

    document.getElementById("quickViewModal1").style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("quickViewModal1").style.display = "none";
};

// Quantity functions
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty.value > 1) qty.value--;
}
function increaseQty() {
  let qty = document.getElementById("qtyInput");
  qty.value++;
}



// product 2 //

// Open modal
document.querySelectorAll(".quickViewModal2").forEach(button => {
  button.addEventListener("click", function () {
    // Example: you can grab product data from card here
    document.getElementById("modalImage").src = "./images/brownglod.png";
    document.getElementById("modalTitle").innerText = "Brown Gold";
    document.getElementById("modalDesc").innerText = "Smooth, exotic & premium Arabian excellence. Experience the luxurious taste of carefully selected Arabian beans.";
    document.getElementById("modalPrice").innerText = "₹650";
    document.getElementById("modalOldPrice").innerText = "₹720";
    document.getElementById("modalRoast").innerText = "Medium";
    document.getElementById("modalOrigin").innerText = "Arabian Peninsula";

    document.getElementById("quickViewModal2").style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("quickViewModal2").style.display = "none";
};

// Quantity functions
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty.value > 1) qty.value--;
}
function increaseQty() {
  let qty = document.getElementById("qtyInput");
  qty.value++;
}

// product 3 //

// Open modal
document.querySelectorAll(".quickViewModal3").forEach(button => {
  button.addEventListener("click", function () {
    // Example: you can grab product data from card here
    document.getElementById("modalImage").src = "./images/aralianbean.png";
    document.getElementById("modalTitle").innerText = "Arabian Bean";
    document.getElementById("modalDesc").innerText = "Smooth, exotic & premium Arabian excellence. Experience the luxurious taste of carefully selected Arabian beans.";
    document.getElementById("modalPrice").innerText = "₹650";
    document.getElementById("modalOldPrice").innerText = "₹720";
    document.getElementById("modalRoast").innerText = "Medium";
    document.getElementById("modalOrigin").innerText = "Arabian Peninsula";

    document.getElementById("quickViewModal3").style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("quickViewModal3").style.display = "none";
};

// Quantity functions
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty.value > 1) qty.value--;
}
function increaseQty() {
  let qty = document.getElementById("qtyInput");
  qty.value++;
}



// product 4 //

// Open modal
document.querySelectorAll(".quickViewModal4").forEach(button => {
  button.addEventListener("click", function () {
    // Example: you can grab product data from card here
    document.getElementById("modalImage").src = "./images/darkberry.png";
    document.getElementById("modalTitle").innerText = "Dark Berry";
    document.getElementById("modalDesc").innerText = "Smooth, exotic & premium Arabian excellence. Experience the luxurious taste of carefully selected Arabian beans.";
    document.getElementById("modalPrice").innerText = "₹650";
    document.getElementById("modalOldPrice").innerText = "₹720";
    document.getElementById("modalRoast").innerText = "Medium";
    document.getElementById("modalOrigin").innerText = "Arabian Peninsula";

    document.getElementById("quickViewModal4").style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("quickViewModal4").style.display = "none";
};

// Quantity functions
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty.value > 1) qty.value--;
}
function increaseQty() {
  let qty = document.getElementById("qtyInput");
  qty.value++;
}






// product 5 //

// Open modal
document.querySelectorAll(".quickViewModal5").forEach(button => {
  button.addEventListener("click", function () {
    // Example: you can grab product data from card here
    document.getElementById("modalImage").src = "./images/darkberry.png";
    document.getElementById("modalTitle").innerText = "Dark Berry";
    document.getElementById("modalDesc").innerText = "Smooth, exotic & premium Arabian excellence. Experience the luxurious taste of carefully selected Arabian beans.";
    document.getElementById("modalPrice").innerText = "₹650";
    document.getElementById("modalOldPrice").innerText = "₹720";
    document.getElementById("modalRoast").innerText = "Medium";
    document.getElementById("modalOrigin").innerText = "Arabian Peninsula";

    document.getElementById("quickViewModal5").style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("quickViewModal5").style.display = "none";
};

// Quantity functions
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty.value > 1) qty.value--;
}
function increaseQty() {
  let qty = document.getElementById("qtyInput");
  qty.value++;
}






// product 6 //

// Open modal
document.querySelectorAll(".quickViewModal6").forEach(button => {
  button.addEventListener("click", function () {
    // Example: you can grab product data from card here
    document.getElementById("modalImage").src = "./images/darkberry.png";
    document.getElementById("modalTitle").innerText = "Dark Berry";
    document.getElementById("modalDesc").innerText = "Smooth, exotic & premium Arabian excellence. Experience the luxurious taste of carefully selected Arabian beans.";
    document.getElementById("modalPrice").innerText = "₹650";
    document.getElementById("modalOldPrice").innerText = "₹720";
    document.getElementById("modalRoast").innerText = "Medium";
    document.getElementById("modalOrigin").innerText = "Arabian Peninsula";

    document.getElementById("quickViewModal6").style.display = "flex";
  });
});

// Close modal
document.querySelector(".close").onclick = () => {
  document.getElementById("quickViewModal6").style.display = "none";
};

// Quantity functions
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  if (qty.value > 1) qty.value--;
}
function increaseQty() {
  let qty = document.getElementById("qtyInput");
  qty.value++;
}




// Open Modal
document.querySelectorAll(".quickViewModal4").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("quickViewModal4").style.display = "block";
  });
});

// Close Modal
document.querySelectorAll(".modal .close").forEach(closeBtn => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").style.display = "none";
  });
});

// Close if clicked outside content
window.addEventListener("click", (e) => {
  const modal = document.getElementById("quickViewModal4");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Quantity Functions
function decreaseQty() {
  let qty = document.getElementById("qtyInput");
  let value = parseInt(qty.value) || 1;
  if (value > 1) {
    qty.value = value - 1;
  }
}

function increaseQty() {
  let qty = document.getElementById("qtyInput");
  let value = parseInt(qty.value) || 1;
  qty.value = value + 1;
}



 
    const playBtn = document.getElementById("playBtn");
    const thumbnail = document.getElementById("videoThumbnail");
    const video = document.getElementById("coffeeVideo");

    playBtn.addEventListener("click", () => {
      thumbnail.style.display = "none";  // hide image
      playBtn.style.display = "none";    // hide play button
      video.style.display = "block";     // show video
      video.play();                      // auto play video
    });
  


    let index = 0;
const texts = document.querySelectorAll(".headtiop");

function showNextText() {
  texts[index].classList.remove("active");
  index = (index + 1) % texts.length;
  texts[index].classList.add("active");
}

setInterval(showNextText, 3000); // change every 3 seconds
