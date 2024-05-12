const cartCountElement = document.getElementById('cart-count');

let cartItems = [];

// обновление количества товаров в корзине на кнопке
function updateCartCount() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Получение товаров из localStorage
const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
cartItems = storedCartItems;
updateCartCount();
