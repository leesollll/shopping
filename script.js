// script.js

let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');

    // Clear existing items
    cartList.innerHTML = '';

    // Add updated items
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    // Calculate total
    cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
    totalElement.textContent = cartTotal.toFixed(2);
}
