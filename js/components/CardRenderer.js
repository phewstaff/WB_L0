import { cardData, checkedCardItems } from "../const.js";
import { updateLocalStorage } from "../state/localStorage.js";
import {
  updateTotalPrice,
  calculateInitialTotal,
  calculateTotalPrice,
  calculateTotalDiscount,
  calculateSumQuantity,
} from "../calc/totalPrice.js";

export function renderCard(data) {
  const cardContainer = document.getElementById("card-container");
  const template = document.getElementById("card-template");

  data.forEach((item) => {
    const card = template.cloneNode(true);
    card.removeAttribute("style");
    card.removeAttribute("id");

    card.id = `card-${item.id}`;

    card.querySelector("#item-checkbox").id = item.id;
    card.querySelector("label").htmlFor = item.id;

    card.querySelector("#price-md").textContent = `${item.price.toLocaleString(
      "ru-RU"
    )} сом`;
    card.querySelector(
      "#initial-price-md"
    ).textContent = `${item.initialPrice.toLocaleString("ru-RU")} сом`;
    card.querySelector("#price-sm").textContent =
      item.price.toLocaleString("ru-RU");
    card.querySelector(
      "#initial-price-sm"
    ).textContent = `${item.initialPrice.toLocaleString("ru-RU")} сом`;

    card.querySelector("#item-image").src = item.imageUrl;
    card.querySelector("#item-name").textContent = item.name;
    card.querySelector("#item-color").textContent = `Цвет: ${item.color}`;
    card.querySelector("#item-brand").textContent = item.brand;
    card.querySelector(
      "#remaining"
    ).textContent = `Осталось ${item.remaining} шт.`;

    const quantityElement = card.querySelector("#quantity");
    const decreaseBtn = card.querySelector("#decrease-quantity");
    const increaseBtn = card.querySelector("#increase-quantity");

    // Set initial quantity
    quantityElement.textContent = item.quantity;

    // Event listener to decrease quantity
    decreaseBtn.addEventListener("click", function () {
      handleQuantityChange(item, -1);
    });

    increaseBtn.addEventListener("click", function () {
      handleQuantityChange(item, 1);
    });

    card.querySelector("#quantity").textContent = item.quantity;

    cardContainer.appendChild(card); //adding card to dom
  });
}

export function handleQuantityChange(item, change) {
  if (item.quantity + change >= 1 && item.remaining - change >= 0) {
    // Update the quantity of the item
    item.quantity += change;

    // Update the remaining items
    item.remaining -= change;

    // Calculate the new price based on cost and quantity
    item.price = item.cost * item.quantity;

    // Calculate the new initial price without discount based on cost and quantity

    const cardElement = document.getElementById(`card-${item.id}`);
    console.log(cardElement);

    item.initialPrice = item.cost * item.quantity * 1.15;

    // Update the quantity, price, and initial price without discount in the card element
    cardElement.querySelector("#quantity").textContent = ` ${item.quantity} `;
    cardElement.querySelector(
      "#price-md"
    ).textContent = `${item.price.toLocaleString("ru-RU")} сом`;
    cardElement.querySelector(
      "#price-sm"
    ).textContent = `${item.price.toLocaleString("ru-RU")}`;
    cardElement.querySelector(
      "#initial-price-md"
    ).textContent = `${item.initialPrice.toLocaleString("ru-RU")} сом`;
    cardElement.querySelector(
      "#initial-price-sm"
    ).textContent = `${item.initialPrice.toLocaleString("ru-RU")}`;

    cardElement.querySelector(
      "#remaining"
    ).textContent = `осталось ${item.remaining} шт.`;

    // Calculate the updated total price, initial total, and total discount
    const total = calculateTotalPrice(checkedCardItems);
    const initialTotal = calculateInitialTotal(checkedCardItems);
    const totalDiscount = calculateTotalDiscount(total, initialTotal);

    // Update the display with the new calculated values
    updateTotalPrice(
      total,
      calculateSumQuantity(checkedCardItems),
      initialTotal,
      totalDiscount
    );

    // Optionally, update the local storage with the updated checkedCardItems
    // You may need to implement the corresponding functions in your localStorage.js module
    // updateLocalStorage(checkedCardItems);

    // Optionally, re-render the cards to reflect the changes visually
  }
}
