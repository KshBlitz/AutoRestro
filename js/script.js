// Handle Table Number or Login Entry
document.addEventListener("DOMContentLoaded", function () {
    const tableNumberForm = document.getElementById('table-number-form');
    const loginForm = document.getElementById('login-form');
    const submitTableBtn = document.getElementById('submit-table-btn');
    const submitLoginBtn = document.getElementById('submit-login-btn');
  
    // For table number submission
    if (tableNumberForm) {
      submitTableBtn.addEventListener('click', function () {
        const tableNumber = document.getElementById('table-number').value;
        if (tableNumber) {
          localStorage.setItem('tableNumber', tableNumber);
          window.location.href = 'menu.html';
        }
      });
    }
  
    // For login submission
    if (loginForm) {
      submitLoginBtn.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
          localStorage.setItem('userName', username);
          window.location.href = 'menu.html';
        }
      });
    }
  });
  
  // Cart Management
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    let total = 0;
  
    cartItemsList.innerHTML = '';  // Clear previous cart items
  
    cart.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('order-item');
      li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${item.id})">Remove</button>`;
      cartItemsList.appendChild(li);
      total += item.price;
    });
  
    totalPrice.textContent = `Total: $${total}`;
  }
  
  function addToCart(id, name, price) {
    cart.push({ id, name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }
  
  function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }
  
  updateCartDisplay();
  
  // Menu Items
  const menuItems = {
    appetizers: [
      { id: 1, name: 'Spring Rolls', price: 5.00, image: 'images/spring_rolls.jpg' },
      { id: 2, name: 'Garlic Bread', price: 4.50, image: 'images/garlic_bread.jpg' }
    ],
    mains: [
      { id: 3, name: 'Pizza Margherita', price: 12.00, image: 'images/pizza_margherita.jpg' },
      { id: 4, name: 'Spaghetti Carbonara', price: 13.50, image: 'images/spaghetti_carbonara.jpg' }
    ],
    desserts: [
      { id: 5, name: 'Chocolate Cake', price: 6.00, image: 'images/chocolate_cake.jpg' },
      { id: 6, name: 'Ice Cream', price: 4.00, image: 'images/ice_cream.jpg' }
    ]
  };
  
  // Fetch Menu Items and Display Them
  function displayMenu() {
    const menuContainer = document.getElementById('menu-items');
    for (let category in menuItems) {
      const categorySection = document.createElement('div');
      categorySection.classList.add('menu-category');
      const categoryTitle = document.createElement('h3');
      categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      categorySection.appendChild(categoryTitle);
  
      menuItems[category].forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');
        itemDiv.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <span>${item.name}</span>
          <span>$${item.price.toFixed(2)}</span>
          <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
        `;
        categorySection.appendChild(itemDiv);
      });
  
      menuContainer.appendChild(categorySection);
    }
  }
  
  displayMenu();
  
// Toggle Navbar visibility for mobile
function toggleNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}
