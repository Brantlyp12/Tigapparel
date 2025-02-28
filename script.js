// JavaScript for adding items to the cart
function addToCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(productName + " has been added to your cart!");
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.dataset.product;
            addToCart(productName);
        });
    });
});
