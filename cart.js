// JavaScript for displaying and clearing the cart
function displayCart() {
    let cartList = document.getElementById('cart-list');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartList) {
        cartList.innerHTML = '';
        if (cart.length === 0) {
            cartList.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cart.forEach((item, index) => {
                let listItem = document.createElement('li');
                listItem.textContent = item;
                cartList.appendChild(listItem);
            });
        }
    }
}

function clearCart() {
    localStorage.setItem('cart', JSON.stringify([]));
    displayCart();
    alert("Your cart has been cleared.");
}

document.addEventListener('DOMContentLoaded', displayCart);
