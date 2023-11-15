export function calculateTotalPrice(checkedCardItems) {
  const total = checkedCardItems.reduce((sum, item) => {
    const itemPrice = item.price;
    return sum + itemPrice;
  }, 0);

  return total;
}

export function updateTotalPrice(total) {
  const totalPriceDisplay = document.getElementById("total-price-display");

  totalPriceDisplay.textContent = total.toLocaleString("ru-RU");

  const totalItemsDisplay = document.getElementById("total-items-display");
  const totalWithoutDiscountDisplay = document.getElementById(
    "total-without-discount-display"
  );
}
