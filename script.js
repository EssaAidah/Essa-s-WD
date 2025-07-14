let store = {
  "Apple": { price: 0.5, quantity: 10 },
  "Banana": { price: 0.3, quantity: 5 },
  "Orange": { price: 0.7, quantity: 8 },
  "Milk": { price: 2.5, quantity: 3 },
};

let cart = [
  ["Apple", 1],
  ["Banana", 1],
  ["Orange", 1],
  ["Milk", 1]
];

function renderStore() {
  const storeList = document.getElementById("storeList");
  storeList.innerHTML = "";
  for (let item in store) {
    storeList.innerHTML += `<li>${item}: $${store[item].price.toFixed(2)} (${store[item].quantity} in stock)</li>`;
  }
}

function renderCart() {
  const cartList = document.getElementById("cartList");
  cartList.innerHTML = "";
  cart.forEach(([item, qty]) => {
    cartList.innerHTML += `<li>${item} x ${qty}</li>`;
  });
}

function checkout() {
  let total = 0;
  const outOfStockMessages = [];

  cart.forEach(([item, qty]) => {
    if (store[item]) {
      if (store[item].quantity >= qty) {
        total += store[item].price * qty;
        store[item].quantity -= qty;

        if (store[item].quantity === 0) {
          delete store[item];
          outOfStockMessages.push(`${item} is now <span class="out-of-stock">out of stock</span>.`);
        }
      } else {
        outOfStockMessages.push(`Not enough ${item} in stock.`);
      }
    } else {
      outOfStockMessages.push(`${item} is <span class="out-of-stock">unavailable</span>.`);
    }
  });

  document.getElementById("total").textContent = total.toFixed(2);
  renderStore();
  if (outOfStockMessages.length) {
    alert(outOfStockMessages.join("\n"));
  }
}

renderStore();
renderCart();