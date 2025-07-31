document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { name: "70 рубинов", price: 220 },
    { name: "200 рубинов", price: 500 },
    { name: "500 рубинов", price: 1000 },
    { name: "1000 рубинов", price: 2100 },
    { name: "2000 рубинов", price: 3800 },
    { name: "Пропуск (На 5к)", price: 500 }
  ];

  let cart = [];

  function updateCart() {
    const cartItems = document.querySelector(".cart-items");
    const cartTotal = document.querySelector(".cart-total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
      const div = document.createElement("div");
      const sum = item.price * item.quantity;
      div.textContent = `${item.name} – ${item.price} Р × ${item.quantity} = ${sum} Р`;
      cartItems.appendChild(div);
      total += sum;
    });

    cartTotal.textContent = `${total} Р`;
    if (cart.length === 0) cartItems.textContent = "Корзина пуста";
  }

  const buttons = [
    ".add-to-cart1",
    ".add-to-cart2",
    ".add-to-cart3",
    ".add-to-cart4",
    ".add-to-cart5",
    ".add-to-cart6"
  ];

  buttons.forEach((selector, index) => {
    const btn = document.querySelector(selector);
    if (btn) {
      btn.addEventListener("click", () => {
        const existing = cart.find(item => item.name === products[index].name);
        if (existing) {
          existing.quantity++;
        } else {
          cart.push({ ...products[index], quantity: 1 });
        }
        updateCart();
      });
    }
  });

  document.querySelector(".cart-clear").addEventListener("click", () => {
    cart = [];
    updateCart();
  });

  updateCart();
});