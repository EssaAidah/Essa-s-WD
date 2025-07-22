const storeItems = [
  { name: "Apple", price: 1 },
  { name: "Banana", price: 0.5 },
  { name: "Carrot", price: 0.75 },
  { name: "Donut", price: 1.25 },
  { name: "Eggs", price: 2 }
];

const storeItemsDiv = document.getElementById("store-items");
const cartList = document.getElementById("cart");
const cartTotalSpan = document.getElementById("cart-total");

let cartTotal = 0;

storeItems.forEach(item => {
  const button = document.createElement("button");
  const text = document.createTextNode(`${item.name} - $${item.price.toFixed(2)}`);
  button.appendChild(text);
  storeItemsDiv.appendChild(button);

  button.addEventListener("click", () => {
    addToCart(item);
  });
});

function addToCart(item) {
  const li = document.createElement("li");
  const liText = document.createTextNode(`${item.name} - $${item.price.toFixed(2)}`);
  li.appendChild(liText);
  cartList.appendChild(li);

  cartTotal += item.price;
  cartTotalSpan.textContent = cartTotal.toFixed(2);
}