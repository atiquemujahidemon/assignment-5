const selectedItems = [];

function clickHandle(element) {
  const boxInfo = element.querySelector(".box-info");
  const productName = boxInfo.querySelector("h6").innerText;
  const productPrice = parseFloat(boxInfo.querySelector("p").innerText);

  selectedItems.push({ name: productName, price: productPrice });

  updateSelectedItemsDisplay();

  calculateTotal();
}

function updateSelectedItemsDisplay() {
  const selectedItemsElement = document.getElementById("selected-items");
  selectedItemsElement.innerHTML = "";

  selectedItems.forEach((item) => {
    const itemElement = document.createElement("p");
    itemElement.innerText = `${item.name} - TK ${item.price.toFixed(2)}`;
    selectedItemsElement.appendChild(itemElement);
  });
}

// Function to calculate and update the cart total
function calculateTotal() {
  const totalElement = document.getElementById("total");

  let total = 0;
  selectedItems.forEach((item) => {
    total += item.price;
  });

  totalElement.innerText = total.toFixed(2);
}

function applyCoupon() {
  const couponInput = document.querySelector(".input.input-bordered");
  const couponCode = couponInput.value;

  calculateTotal();
}

const applyButton = document.querySelector("");
applyButton.addEventListener("click", applyCoupon);
// Disable the purchase button by default
purchaseButton.disabled = true;

applyButton.addEventListener("click", () => {
  const couponCode = couponInput.value.trim();

  if (couponCode === "SALE200") {
    if (total >= 500) {
      // Enable the purchase button and apply discount
      purchaseButton.disabled = false;
      const discountAmount = 200;
      const discountedTotal = total - discountAmount;

      // Update the displayed values
      document.getElementById("discount").textContent = discountAmount;
      document.getElementById("total").textContent = discountedTotal;
    } else {
      alert("Total must be at least 500 taka to apply the discount.");
    }
  } else {
    alert("Invalid coupon code.");
  }
});

// Call the function with the total price as an argument
const total = /* Calculate the total price */ handleDiscountAndButton(total);
// JavaScript for handling the "Make Purchase" button and congratulation popup

// Function to calculate and update the total amount
function updateTotal() {
  const selectedItems = document.querySelectorAll(".selected-items .box-info");
  let total = 0;

  selectedItems.forEach((item) => {
    const price = parseFloat(item.querySelector(".font-light").textContent);
    total += price;
  });

  document.getElementById("total").textContent = total.toFixed(2);
}
function openPopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("hidden");
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.add("hidden");
}
function resetAmounts() {
  // Get the span elements by their IDs
  var totalSpan = document.getElementById("total");
  var discountAmountSpan = document.getElementById("discountAmount");
  var finalTotalSpan = document.getElementById("finalTotal");

  // Set the content of the spans to blank
  totalSpan.textContent = "00";
  discountAmountSpan.textContent = "00";
  finalTotalSpan.textContent = "00";
}
function applyCoupon() {
  var couponInput = document.getElementById("couponInput");
  var discountLabel = document.getElementById("discountLabel");
  var discountAmount = document.getElementById("discountAmount");
  var totalAmountElement = document.getElementById("total");
  var finalTotalElement = document.getElementById("finalTotal");

  var couponCode = couponInput.value;
  var totalAmount = parseFloat(totalAmountElement.textContent);

  if (couponCode === "SELL200" && totalAmount >= 500) {
    var discount = 200;
    var finalTotal = totalAmount - discount;

    discountLabel.style.display = "block";
    discountAmount.textContent = discount.toFixed(2);
    finalTotalElement.textContent = finalTotal.toFixed(2);
  } else {
    discountLabel.style.display = "none";
    discountAmount.textContent = "00.00";
    finalTotalElement.textContent = totalAmount.toFixed(2);
  }
}
