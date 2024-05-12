// Делаем действительные кнопки "В корзину" на карточке товаров и также счётчик товара
const addToCartButtons = document.querySelectorAll('.card-add');
const cartCountElement = document.getElementById('cart-count');

let cartItems = [];

// Что происходит при нажатии на кнопку "В корзину": сначала находится элемент ".card", после идентифицируем товар (id, картинка, название, цена)
function addToCart(button) {
    const card = button.closest('.card');
    const productId = button.dataset.productId;
    const imageUrl = card.querySelector('.card-image img').src;
    const productName = card.querySelector('.card-title').textContent;
    const productPrice = parseFloat(card.querySelector('.card-prices').textContent.replace(/[^0-9.-]+/g, ""));

    // Тут производим проверку на наличие товара в корзине, если его нет, то он добавляется в корзину, если есть - увеличиваем его количество
    // во избежание повторяющихся карточек товара в корзине
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

// Функция для обновления количества товаров в корзине на кнопке
function updateCartCount() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Делаем кликабельными и работающими кнопки "В корзину"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => addToCart(button));
});

// Получаем товары из localStorage при загрузке страницы
const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
cartItems = storedCartItems;
updateCartCount();