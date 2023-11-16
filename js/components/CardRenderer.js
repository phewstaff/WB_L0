export function renderCard(data) {
  const cardContainer = document.getElementById("card-container");
  const template = document.getElementById("card-template");

  data.forEach((item) => {
    const card = template.cloneNode(true);
    card.removeAttribute("id"); // Removed the id attribute from the cloned card
    card.removeAttribute("style");

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

    card.querySelector("#quantity").textContent = item.quantity;

    cardContainer.appendChild(card); //adding card to dom
  });
}
