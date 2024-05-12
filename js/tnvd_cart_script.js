const addToCartButtons = document.querySelectorAll('.card-add');

function addToCart(button) {
    const card = button.closest('.product-container'); // Ищем ближайший div с классом .product-container
    const productId = button.dataset.productId; // Получаем ID товара из data-атрибута кнопки
    const imageUrl = card.querySelector('.main-image img').src; // Ссылка на изображение из элемента .main-image img
    const productName = card.querySelector('.product-details h1').textContent; // Название товара из элемента h1 внутри .product-details
    const productPrice = parseFloat(card.querySelector('.cost').textContent.replace(/[^0-9.-]+/g, "")); // Цена товара из элемента .cost, очищенная от ненужных символов
  
    // Проверка наличия товара в корзине, добавление или увеличение количества
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      const cartItem = {
        id: productId,
        image: imageUrl,
        name: productName,
        price: productPrice,
        quantity: 1
      };
      cartItems.push(cartItem);
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
  }

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => addToCart(button));
  });
  