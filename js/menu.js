document.addEventListener('DOMContentLoaded', function () {
  const menuData = [
    {
      category: 'Starters',
      items: [
        {
          title: 'Samosa',
          price: '₹399',
          description: 'Deep-fried pastry pockets stuffed with a savory mixture of spiced potatoes, peas, and herbs. A crispy and delicious start to your meal.',
          image: 'images/samosa.jpg', // Replace with your image path
        },
        {
          title: 'Paneer Tikka',
          price: '₹799',
          description: 'Cubes of paneer (Indian cottage cheese) marinated in a spiced yogurt mixture and grilled to perfection. Served with green chutney.',
          image: 'images/paneer-tikka.jpg', // Replace with your image path
        },
        {
          title: 'Chicken Pakora',
          price: '₹599',
          description: 'Tender pieces of chicken coated in seasoned chickpea flour and deep-fried to crispy golden perfection.',
          image: 'images/chicken-pakora.jpg', // Replace with your image path
        },
        {
          title: 'Aloo Tikki',
          price: '₹499',
          description: 'Spiced mashed potato patties shallow-fried and served with tamarind and mint chutney.',
          image: 'images/aloo-tikki.jpg', // Replace with your image path
        },
        {
          title: 'Hara Bhara Kebab',
          price: '₹749',
          description: 'A healthy vegetarian kebab made from spinach, peas, and spices, pan-fried to a crispy exterior.',
          image: 'images/hara-bhara-kebab.jpg', // Replace with your image path
        },
      ],
    },
    {
      category: 'Main Course',
      items: [
        {
          title: 'Butter Chicken',
          price: '₹1,299',
          description: 'Boneless chicken pieces cooked in a rich, creamy tomato-based gravy with aromatic spices. A perfect blend of flavors.',
          image: 'images/butter-chicken.jpg', // Replace with your image path
        },
        {
          title: 'Paneer Butter Masala',
          price: '₹1,199',
          description: 'Soft cubes of paneer cooked in a creamy tomato gravy with a mix of rich spices. A vegetarian delight.',
          image: 'images/paneer-butter-masala.jpg', // Replace with your image path
        },
        {
          title: 'Lamb Rogan Josh',
          price: '₹1,499',
          description: 'A fragrant and flavorful curry made with tender lamb pieces, simmered in a spicy, aromatic sauce of yogurt, tomatoes, and herbs.',
          image: 'images/lamb-rogan-josh.jpg', // Replace with your image path
        },
        {
          title: 'Chole Bhature',
          price: '₹999',
          description: 'A North Indian classic, this dish features spicy chickpeas served with a deep-fried bread called bhature.',
          image: 'images/chole-bhature.jpg', // Replace with your image path
        },
        {
          title: 'Dal Tadka',
          price: '₹899',
          description: 'A popular lentil dish made from yellow lentils cooked with ghee, garlic, and cumin, seasoned with a tadka (tempering) of mustard seeds and spices.',
          image: 'images/dal-tadka.jpg', // Replace with your image path
        },
      ],
    },
    {
      category: 'Rice',
      items: [
        {
          title: 'Biryani',
          price: '₹1,399',
          description: 'A fragrant rice dish cooked with basmati rice, marinated meat (chicken, mutton, or beef), and a blend of aromatic spices, garnished with fried onions.',
          image: 'images/biryani.jpg', // Replace with your image path
        },
        {
          title: 'Jeera Rice',
          price: '₹699',
          description: 'Simple basmati rice flavored with cumin seeds and sautéed in ghee, often served as a side dish with curry.',
          image: 'images/jeera-rice.jpg', // Replace with your image path
        },
        {
          title: 'Pulao',
          price: '₹749',
          description: 'Fragrant basmati rice cooked with vegetables and spices like cinnamon, cloves, and cardamom, offering a mild but aromatic flavor.',
          image: 'images/pulao.jpg', // Replace with your image path
        },
        {
          title: 'Egg Biryani',
          price: '₹1,249',
          description: 'A variation of biryani, made with boiled eggs and fragrant rice cooked in a blend of spices.',
          image: 'images/egg-biryani.jpg', // Replace with your image path
        },
        {
          title: 'Kashmiri Pulao',
          price: '₹999',
          description: 'A sweet and fragrant rice dish with dried fruits like cashews, raisins, and pomegranate, cooked in mild spices.',
          image: 'images/kashmiri-pulao.jpg', // Replace with your image path
        },
      ],
    },
    {
      category: 'Breads',
      items: [
        {
          title: 'Naan',
          price: '₹299',
          description: 'A soft, leavened flatbread traditionally baked in a tandoor oven. Available in plain or buttered variations.',
          image: 'images/naan.jpg', // Replace with your image path
        },
        {
          title: 'Garlic Naan',
          price: '₹349',
          description: 'A fluffy naan bread brushed with butter and garlic, perfect for pairing with rich curries.',
          image: 'images/garlic-naan.jpg', // Replace with your image path
        },
        {
          title: 'Aloo Paratha',
          price: '₹499',
          description: 'A stuffed flatbread made with whole wheat flour and filled with a spiced potato filling, often served with yogurt or pickle.',
          image: 'images/aloo-paratha.jpg', // Replace with your image path
        },
        {
          title: 'Roti',
          price: '₹199',
          description: 'A whole wheat flatbread cooked on a griddle, a staple in most Indian meals.',
          image: 'images/roti.jpg', // Replace with your image path
        },
        {
          title: 'Lachha Paratha',
          price: '₹399',
          description: 'A layered, crispy flatbread made from whole wheat flour, popular for its flaky texture and subtle flavor.',
          image: 'images/lachha-paratha.jpg', // Replace with your image path
        },
      ],
    },
  ];

  // Cart Object
  let cart = [];

  // Function to display the menu items
  function displayMenu() {
    const menuItemsContainer = document.getElementById('menu-items');

    menuData.forEach(category => {
      const categoryDiv = document.createElement('div');
      categoryDiv.classList.add('menu-category');

      const categoryTitle = document.createElement('h3');
      categoryTitle.innerText = category.category;
      categoryDiv.appendChild(categoryTitle);

      category.items.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        // Create image for the menu item
        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.title;
        itemImage.classList.add('menu-card-img');
        menuCard.appendChild(itemImage);

        // Create content for the menu card
        const cardContent = document.createElement('div');
        cardContent.classList.add('menu-card-content');

        // Title of the menu item
        const itemTitle = document.createElement('h4');
        itemTitle.classList.add('menu-card-title');
        itemTitle.innerText = item.title;
        cardContent.appendChild(itemTitle);

        // Price of the menu item
        const itemPrice = document.createElement('p');
        itemPrice.classList.add('menu-card-price');
        itemPrice.innerText = item.price;
        cardContent.appendChild(itemPrice);

        // Description of the menu item
        const itemDescription = document.createElement('p');
        itemDescription.classList.add('menu-card-description');
        itemDescription.innerText = item.description;
        cardContent.appendChild(itemDescription);

        // Add to Cart Button
        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart', 'primary-btn');
        addToCartButton.innerText = 'Add to Cart';
        addToCartButton.onclick = () => addToCart(item);
        cardContent.appendChild(addToCartButton);

        menuCard.appendChild(cardContent);

        categoryDiv.appendChild(menuCard);
      });

      menuItemsContainer.appendChild(categoryDiv);
    });
  }

// Function to add an item to the cart
function addToCart(item) {
  const cartItemIndex = cart.findIndex(cartItem => cartItem.title === item.title);
  if (cartItemIndex > -1) {
    cart[cartItemIndex].quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  // Save the updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartNotification();
}


// Function to update the cart notification
function updateCartNotification() {
  const cartNotification = document.getElementById('cart-notification');
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')) * item.quantity, 0).toFixed(2);
  
  // Update the notification content
  cartNotification.innerHTML = `${totalItems} items - ₹${totalPrice} <button id="view-cart-button" class="primary-btn">View Cart</button>`;
  // Ensure the View Cart button functionality
  document.getElementById('view-cart-button').onclick = function () {
    window.location.href = 'checkout.html';
  };
}

  // Call the function to display the menu
  displayMenu();

  // Function to view the cart (on the button click in popup)
  document.getElementById('view-cart-button').onclick = function () {
    window.location.href = 'checkout.html';
  };
});


