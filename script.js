let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName) {
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " has been added to your cart!");
}
