document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Get the container to display cart items
    const cartContainer = document.getElementById('cart-container');
    const totalContainer = document.getElementById('total-container');
  
    // Function to display the cart items
    function displayCart() {
      cartContainer.innerHTML = ''; // Clear previous content
  
      if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalContainer.innerHTML = '';
        return;
      }
  
      let totalPrice = 0;
  
      cart.forEach((item, index) => {
        const itemTotal = parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity;
        totalPrice += itemTotal;
  
        // Create a row for each cart item
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
          <p>${item.title}</p>
          <p>₹${item.price} x ${item.quantity}</p>
          <div class="cart-controls">
            <button class="quantity-btn" data-action="decrease" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-btn" data-action="increase" data-index="${index}">+</button>
          </div>
          <p>₹${itemTotal.toFixed(2)}</p>
        `;
        cartContainer.appendChild(cartItemDiv);
      });
  
      // Update the total price
      totalContainer.innerHTML = `<h3>Total: ₹${totalPrice.toFixed(2)}</h3>
        <button id="place-order">Place Order</button>`;
    }
  
    // Function to update item quantity
    function updateQuantity(index, action) {
      if (action === 'increase') {
        cart[index].quantity += 1;
      } else if (action === 'decrease' && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else if (action === 'decrease') {
        cart.splice(index, 1); // Remove item if quantity reaches 0
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCart();
    }
  
    // Event delegation for quantity buttons
    cartContainer.addEventListener('click', function (event) {
      if (event.target.classList.contains('quantity-btn')) {
        const index = parseInt(event.target.getAttribute('data-index'));
        const action = event.target.getAttribute('data-action');
        updateQuantity(index, action);
      }
    });
  
    // Place Order functionality
    totalContainer.addEventListener('click', function (event) {
      if (event.target.id === 'place-order') {
        alert('Order placed successfully!');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
      }
    });
  
    // Display the cart on page load
    displayCart();
  });
  