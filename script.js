
let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCartUI();
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const totalAmount = document.getElementById("total-amount");
    if (!cartItems || !totalAmount) return;

    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((cartItem, index) => {
        total += cartItem.price;
        const li = document.createElement("li");
        li.textContent = `${cartItem.item} - ₹${cartItem.price}`;
        cartItems.appendChild(li);
    });
    totalAmount.textContent = total;
}
document.getElementById("confirm-order").addEventListener("click", () => {
  document.getElementById("confirmationPopup").style.display = "block";

  // Confetti effect
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
});