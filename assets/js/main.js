var totalCart = 0

function addToCart(element) {
    const price = element.previousElementSibling.innerText;
    totalCart += Number.parseFloat(price.slice(1));
    updateCart()
}

function updateCart() {
    document.getElementById("totalAmount").innerText = totalCart.toFixed(2)
}

function resetCart() {
    document.getElementById("totalAmount").innerText = '0.00';
}