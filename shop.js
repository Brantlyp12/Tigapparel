// JavaScript for Shop Page - Handles Adding to Cart
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let productName = this.getAttribute("data-product");
            addToCart(productName);
        });
    });
});
