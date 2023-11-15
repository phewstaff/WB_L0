export function calculateTotalPrice(checkedCardItems) {
  const total = checkedCardItems.reduce((sum, item) => {
    const itemPrice = item.price;
    return sum + itemPrice;
  }, 0);

  return total;
}
