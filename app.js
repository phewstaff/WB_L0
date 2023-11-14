import { initializeAccordion } from "./js/accordionModule.js";
import { cardData } from "./js/const.js";

// Function to render the card from an array of objects
function renderCard(data) {
  const cardContainer = document.getElementById("card-container");
  const template = document.getElementById("card-template");

  data.forEach((item) => {
    const card = template.cloneNode(true);
    card.removeAttribute("id"); // Removed the id attribute to ensure uniqueness
    card.removeAttribute("style");

    card.querySelector("#item-checkbox").id = `item-checkbox-${item.id}`;
    card.querySelector("label").htmlFor = `item-checkbox-${item.id}`;
    card.querySelector("#item-image").src = item.imageUrl;
    card.querySelector("#price-md").textContent = `${item.price} сом`;
    card.querySelector(
      "#discount-md"
    ).textContent = `${item.discountPrice} сом`;
    card.querySelector(
      "#discount-sm"
    ).textContent = `${item.discountPrice} сом`;
    card.querySelector("#item-name").textContent = item.name;
    card.querySelector("#item-color").textContent = `Цвет: ${item.color}`;
    card.querySelector("#item-brand").textContent = item.brand;
    card.querySelector(
      "#remaining"
    ).textContent = `Осталось ${item.remaining} шт.`;
    card.querySelector("#price-sm").textContent = item.price;

    cardContainer.appendChild(card); //adding card to dom
  });
}
initializeAccordion();
renderCard(cardData);
