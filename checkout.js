window.onload = () => {
    const cartItems = JSON.parse(localStorage.getItem("vrrCart")) || [];
    const cartList = document.getElementById("checkout-cart-items");
    const totalElement = document.getElementById("checkout-total");
    let total = 0;
  
    cartItems.forEach(({ item, price }) => {
      const li = document.createElement("li");
      li.textContent = `${item} - ₹${price}`;
      cartList.appendChild(li);
      total += price;
    });
  
    totalElement.textContent = total;
    const paymentMode = document.querySelectorAll('input[name="payment"]');
paymentMode.forEach(input => {
    input.addEventListener('change', function() {
        if (this.value === "UPI") {
            document.querySelector('.upi-section').style.display = "block"; // Show UPI section
        } else {
            document.querySelector('.upi-section').style.display = "none"; // Hide UPI section for other payment methods
        }
    });
});


  };
  function confirmOrder() {
    document.getElementById("thankYouPopup").style.display = "block";
  
    // Confetti effect
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  
    // Optional: clear cart
    localStorage.removeItem("cart");
  }
  
  function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }
  
  