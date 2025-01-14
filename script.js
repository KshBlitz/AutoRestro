// Toggle Categories Button
function toggleCategories() {
    var categories = document.getElementById('categories');
    categories.style.display = categories.style.display === 'block' ? 'none' : 'block';
}

// Cart Notification Function
let cartCount = 0;
let cartTotal = 0;

function updateCart(itemName, itemPrice) {
    cartCount += 1;
    cartTotal += parseFloat(itemPrice);
    
    // Update notification
    document.getElementById('cart-count').innerText = cartCount;
    document.getElementById('cart-total').innerText = cartTotal.toFixed(2);

    // Show notification
    var notification = document.getElementById('cart-notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Add Event Listeners to Add to Cart Buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const itemName = e.target.getAttribute('data-item');
        const itemPrice = e.target.getAttribute('data-price');
        updateCart(itemName, itemPrice);
        alert(`${itemName} added to cart`);
    });
});
