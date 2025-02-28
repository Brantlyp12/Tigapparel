// JavaScript for Catalog Page - Handles Category Selection
document.addEventListener("DOMContentLoaded", function () {
    let categoryLinks = document.querySelectorAll(".category-link");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let category = this.getAttribute("data-category");
            filterProducts(category);
        });
    });
});

function filterProducts(category) {
    let allProducts = document.querySelectorAll(".product");

    allProducts.forEach(product => {
        if (category === "all" || product.classList.contains(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
