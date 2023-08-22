 const selectedItems = [];


function clickHandle(element) {

  const boxInfo = element.querySelector('.box-info');
  const productName = boxInfo.querySelector('h6').innerText;
  const productPrice = parseFloat(boxInfo.querySelector('p').innerText);
  
  
  selectedItems.push({ name: productName, price: productPrice });
  

  updateSelectedItemsDisplay();
  
  calculateTotal();
}


function updateSelectedItemsDisplay() {
  const selectedItemsElement = document.getElementById('selected-items');
  selectedItemsElement.innerHTML = '';
  
  selectedItems.forEach(item => {
    const itemElement = document.createElement('p');
    itemElement.innerText = `${item.name} - TK ${item.price.toFixed(2)}`;
    selectedItemsElement.appendChild(itemElement);
  });
}

// Function to calculate and update the cart total
function calculateTotal() {
  const totalElement = document.getElementById('total');
  
  let total = 0;
  selectedItems.forEach(item => {
    total += item.price;
  });
  
  totalElement.innerText = total.toFixed(2);
}

function applyCoupon() {
  const couponInput = document.querySelector('.input.input-bordered');
  const couponCode = couponInput.value;
  
  calculateTotal();
}

const applyButton = document.querySelector('');
applyButton.addEventListener('click', applyCoupon);
    // Disable the purchase button by default
    purchaseButton.disabled = true;
  
    applyButton.addEventListener('click',() => {
      const couponCode = couponInput.value.trim();
  
      if (couponCode === 'SALE200') {
        if (total >= 500) {
          // Enable the purchase button and apply discount
          purchaseButton.disabled = false;
          const discountAmount = 200;
          const discountedTotal = total - discountAmount;
  
          // Update the displayed values
          document.getElementById('discount').textContent = discountAmount;
          document.getElementById('total').textContent = discountedTotal;
        } else {
          alert('Total must be at least 500 taka to apply the discount.');
        }
      } else {
        alert('Invalid coupon code.');
      }
    });
      
  // Call the function with the total price as an argument
  const total = /* Calculate the total price */
  handleDiscountAndButton(total);
  // JavaScript for handling the "Make Purchase" button and congratulation popup

// Function to calculate and update the total amount
function updateTotal() {
    const selectedItems = document.querySelectorAll('.selected-items .box-info');
    let total = 0;
  
    selectedItems.forEach(item => {
      const price = parseFloat(item.querySelector('.font-light').textContent);
      total += price;
    });
  
    document.getElementById('total').textContent = total.toFixed(2);
  }
  
  // Function to handle the "Make Purchase" button click
  function handlePurchase() {
    // Display congratulation popup
    document.getElementById('congratulationPopup').classList.remove('hidden');
  
    // Clear selected items and update total amount
    document.getElementById('selected-items').innerHTML = '';
    updateTotal();
  }
  
  // Function to close the congratulation popup
  function closePopup() {
    document.getElementById('congratulationPopup').classList.add('hidden');
  }
  
  // Attach event listeners
  document.getElementById('Purchase').addEventListener('click', handlePurchase);
  document.getElementById('closePopup').addEventListener('click', closePopup);
  closePopup.value=''
  
  // Initial total update
  updateTotal(); 
  