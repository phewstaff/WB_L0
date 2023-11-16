import {
  updateTotalPrice,
  calculateTotalPrice,
  calculateSumQuantity,
  calculateInitialTotal,
} from "./totalPrice.js";

// Add event listeners to each card element
const cardElements = document.querySelectorAll(".counter");

cardElements.forEach((element, index) => {
  const decreaseButton = element.querySelector(".decrease-quantity");
  const increaseButton = element.querySelector(".increase-quantity");
  const quantityElement = element.querySelector(".quantity");

  // Initial quantity value
  let quantity = cardData[index].quantity;

  // Update quantity display
  quantityElement.textContent = quantity;

  decreaseButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityElement.textContent = quantity;
      updateCardData(index, quantity);
      updateTotals();
    }
  });

  increaseButton.addEventListener("click", () => {
    // You might want to add a check to limit the quantity based on remaining quantity in stock
    quantity++;
    quantityElement.textContent = quantity;
    updateCardData(index, quantity);
    updateTotals();
  });
});

// Function to update the card data
function updateCardData(index, newQuantity) {
  checkedCardItems[index].quantity = newQuantity;
  checkedCardItems[index].price = cardData[index].price * newQuantity;
}

// Function to update totals
function updateTotals() {
  const total = calculateTotalPrice(checkedCardItems);
  const totalItems = calculateSumQuantity(checkedCardItems);
  const initialTotal = calculateInitialTotal(checkedCardItems);

  // Update the display
  updateTotalPrice(total, totalItems, initialTotal);
}

// Initial update of totals
updateTotals();

function updateCardData(index, newQuantity) {
  const item = checkedCardItems[index];

  // Update quantity
  item.quantity = newQuantity;

  // Update price based on the new quantity
  item.price = cardData[index].price * newQuantity;
}
