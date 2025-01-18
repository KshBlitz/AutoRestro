document.addEventListener('DOMContentLoaded', function () {
  // Sample menu data
  const menuData = [
    {
      category: 'Starters',
      items: [
        {
          title: 'Garlic Bread',
          price: '$5.99',
          description: 'Crispy bread with garlic butter.',
          image: 'images/garlic-bread.jpg',
        },
        {
          title: 'Bruschetta',
          price: '$7.49',
          description: 'Grilled bread with tomato and basil.',
          image: 'images/bruschetta.jpg',
        },
      ],
    },
    {
      category: 'Main Dishes',
      items: [
        {
          title: 'Spaghetti Bolognese',
          price: '$12.99',
          description: 'Pasta with a rich meat sauce.',
          image: 'images/spaghetti-bolognese.jpg',
        },
        {
          title: 'Grilled Chicken',
          price: '$15.99',
          description: 'Tender grilled chicken served with vegetables.',
          image: 'images/grilled-chicken.jpg',
        },
      ],
    },
    {
      category: 'Desserts',
      items: [
        {
          title: 'Tiramisu',
          price: '$6.99',
          description: 'Classic Italian dessert with coffee and mascarpone.',
          image: 'images/tiramisu.jpg',
        },
        {
          title: 'Chocolate Cake',
          price: '$5.49',
          description: 'Rich chocolate cake with frosting.',
          image: 'images/chocolate-cake.jpg',
        },
      ],
    },
  ];

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

        menuCard.appendChild(cardContent);

        categoryDiv.appendChild(menuCard);
      });

      menuItemsContainer.appendChild(categoryDiv);
    });
  }

  // Call the function to display the menu
  displayMenu();
});
