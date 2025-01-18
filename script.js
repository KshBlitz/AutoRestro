
document.addEventListener("DOMContentLoaded", function () {

    // Contact Form Submission
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display a success message (simulating email submission)
        const statusDiv = document.getElementById('form-status');
        statusDiv.textContent = 'Thank you for your message! We will get back to you soon.';
        statusDiv.style.color = 'green';

        // Clear the form fields
        document.getElementById('contact-form').reset();
    });

    // Newsletter Subscription
    document.getElementById('subscribe-btn').addEventListener('click', function () {
        const email = document.getElementById('newsletter-email').value;

        if (email) {
            alert(`You have successfully subscribed with email: ${email}`);
            document.getElementById('newsletter-email').value = ''; // Clear the input field
        } else {
            alert('Please enter a valid email address');
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
    // Menu Items data
    const menuItems = [
        { id: 1, name: 'Paneer Chilli', description: 'Spicy fried paneer', price: 250, imageUrl: 'images/paneer-chilli.jpg' },
        { id: 2, name: 'Manchurian', description: 'Deep-fried mixed vegetable balls', price: 220, imageUrl: 'images/manchurian.jpg' },
        { id: 3, name: 'Veg 65', description: 'Spicy deep-fried snack', price: 180, imageUrl: 'images/veg-65.jpg' },
        { id: 4, name: 'Paneer 65', description: 'Spicy fried paneer', price: 250, imageUrl: 'images/paneer-65.jpg' },
        { id: 5, name: 'Plain Rice', description: 'Steamed plain rice', price: 100, imageUrl: 'images/plain-rice.jpg' },
        { id: 6, name: 'Jeera Rice', description: 'Rice with cumin', price: 120, imageUrl: 'images/jeera-rice.jpg' },
        { id: 7, name: 'Veg Pulao', description: 'Flavored rice with vegetables', price: 150, imageUrl: 'images/veg-pulao.jpg' },
        { id: 8, name: 'Veg Kadhai', description: 'Mixed vegetables in spicy gravy', price: 220, imageUrl: 'images/veg-kadhai.jpg' },
    ];

    // Load Menu Items on Menu Page
    if (window.location.pathname.includes('menu.html')) {
        const menuContainer = document.querySelector('.menu-items');
        menuItems.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">$${item.price}</span>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
            `;
            menuContainer.appendChild(menuItemElement);
        });

        // Cart functionality for menu page
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartNotification = document.querySelector('.cart-notification');
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function () {
                const itemId = parseInt(this.getAttribute('data-id'));
                const item = menuItems.find(item => item.id === itemId);
                cart.push(item);

                // Save cart to localStorage
                localStorage.setItem('cart', JSON.stringify(cart));

                // Show notification
                cartNotification.textContent = `${item.name} added to cart.`;
                cartNotification.style.display = 'block';

                setTimeout(() => {
                    cartNotification.style.display = 'none';
                }, 3000);
            });
        });
    }

    // Checkout Page: Display cart items
    if (window.location.pathname.includes('checkout.html')) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItemsContainer = document.querySelector('.cart-items');
        const orderTotalContainer = document.querySelector('.order-total');

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            orderTotalContainer.innerHTML = '';
        } else {
            // Display cart items
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item');
                cartItem.innerHTML = `
                    <div class="item-details">
                        <span>${item.name}</span>
                        <span>$${item.price}</span>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });

            // Calculate total price
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            orderTotalContainer.innerHTML = `Total: $${total}`;
        }

        // Place Order
        document.querySelector('.primary-btn').addEventListener('click', function () {
            alert('Order placed successfully!');
            localStorage.removeItem('cart'); // Clear cart after order
            window.location.href = "landing.html"; // Redirect to home page
        });
    }

    // Landing Page: Table ID from QR code
    if (window.location.pathname.includes('landing.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const tableId = urlParams.get('tableID');
        if (tableId) {
            document.querySelector('.table-id').textContent = `Table ID: ${tableId}`;
        }
    }
});
