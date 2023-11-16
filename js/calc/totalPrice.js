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
  const totalDiscount = total - initialTotal;
  return totalDiscount;
}

export function updateTotalPrice(total, totalItems, initialTotal) {
  const totalPriceDisplay = document.getElementById("total-price-display");
  totalPriceDisplay.textContent = total.toLocaleString("ru-RU");

  const totalItemsDisplay = document.getElementById("total-items-display");
  totalItemsDisplay.textContent = `${totalItems} товара`;

  const initialTotalDisplay = document.getElementById("initial-total-display");
  initialTotalDisplay.textContent = `${initialTotal} сом`;

  const totalDiscount = calculateTotalDiscount(initialTotal, total);
  const totalDiscountDisplay = document.getElementById(
    "total-discount-display"
  );
  totalDiscountDisplay.textContent = `${totalDiscount} сом`;
}
