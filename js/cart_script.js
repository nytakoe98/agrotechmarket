const cartItemsContainer = document.getElementById('cart-items');
const totalSumElement = document.getElementById('total-sum');

// сохранение товаров в корзине в localStorage
function saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// получения товаров из localStorage
function loadCartItems() {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = storedCartItems;
}

// отображения товаров в корзине
function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    
    let totalSum = 0;

    cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            cartItems.splice(index, 1); 
            saveCartItems();
            renderCartItems();
        });
        cartItemElement.appendChild(removeButton);

        const imageElement = document.createElement('img');
        imageElement.src = item.image;
        cartItemElement.appendChild(imageElement);

        const infoElement = document.createElement('div');
        infoElement.classList.add('cart-item-info');

        const nameElement = document.createElement('div');
        nameElement.classList.add('cart-item-name');
        nameElement.textContent = item.name;
        infoElement.appendChild(nameElement);

        const priceElement = document.createElement('div');
        priceElement.classList.add('cart-item-price');
        priceElement.textContent = `Цена: ${item.price} руб.`;
        infoElement.appendChild(priceElement);

        const quantityElement = document.createElement('div');
        quantityElement.classList.add('cart-item-quantity');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.addEventListener('change', () => {
            item.quantity = parseInt(quantityInput.value);
            renderCartItems();
            saveCartItems();
        });
        quantityElement.appendChild(document.createTextNode('Количество: '));
        quantityElement.appendChild(quantityInput);
        infoElement.appendChild(quantityElement);

        const totalElement = document.createElement('div');
        totalElement.classList.add('cart-item-total');
        totalElement.textContent = `Сумма: ${item.price * item.quantity} руб.`;
        infoElement.appendChild(totalElement);

        cartItemElement.appendChild(infoElement);
        cartItemsContainer.appendChild(cartItemElement);

        totalSum += item.price * item.quantity;
    });

    totalSumElement.textContent = totalSum.toFixed(2);
}

let cartItems = [];
loadCartItems();
renderCartItems();