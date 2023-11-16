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

export function updateTotalPrice(total, totalItems) {
  const totalPriceDisplay = document.getElementById("total-price-display");
  totalPriceDisplay.textContent = total.toLocaleString("ru-RU");

  const totalItemsDisplay = document.getElementById("total-items-display");
  totalItemsDisplay.textContent = `${totalItems} товара`;

  const totalWithoutDiscountDisplay = document.getElementById(
    "total-without-discount-display"
  );
}
