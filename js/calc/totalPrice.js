import { cardData } from "../const.js";

export function calculateTotalPrice(checkedCardItems) {
  const total = checkedCardItems.reduce((sum, item) => {
    const itemPrice = item.price;
    return sum + itemPrice;
  }, 0);

  return total;
}

export function calculateSumQuantity(checkedCardItems) {
  const sumQuantity = checkedCardItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  return sumQuantity;
}

export function calculateInitialTotal(checkedCardItems) {
  const initialTotal = checkedCardItems.reduce(
    (sum, item) => sum + item.initialPrice,
    0
  );
  return initialTotal;
}

export function calculateTotalDiscount(initialTotal, total) {
  const totalDiscount = total - initialTotal * 1.15;
  return totalDiscount;
}

export function updateTotalPrice(total, totalItems, initialTotal) {
  const totalPriceDisplay = document.getElementById("total-price-display");
  totalPriceDisplay.textContent = total.toLocaleString("ru-RU") + " сом";

  const totalItemsDisplay = document.getElementById("total-items-display");
  totalItemsDisplay.textContent =
    totalItems.toLocaleString("ru-RU") + " товара";

  const initialTotalDisplay = document.getElementById("initial-total-display");
  initialTotalDisplay.textContent =
    initialTotal.toLocaleString("ru-RU") + " сом";

  const totalDiscount = calculateTotalDiscount(initialTotal, total);
  const totalDiscountDisplay = document.getElementById(
    "total-discount-display"
  );

  totalDiscountDisplay.textContent = `${totalDiscount.toLocaleString(
    "ru-RU"
  )} сом`;

  const topSelectTotalPriceDisplay = document.getElementById(
    "top-select-total-price"
  );

  const sumQuantity = calculateSumQuantity(cardData);

  const initialCardsTotal = calculateTotalPrice(cardData);

  topSelectTotalPriceDisplay.textContent =
    sumQuantity.toString() +
    " товаров · " +
    initialCardsTotal.toLocaleString("ru-RU") +
    " сом";
}
