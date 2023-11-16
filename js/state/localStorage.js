export function updateLocalStorage(
  checkedCardItems,
  savedTotalPrice,
  totalQuantity,
  savedCheckedBoxes,
  savedInitialTotal
) {
  localStorage.setItem("checkedItems", JSON.stringify(checkedCardItems));
  localStorage.setItem("totalPrice", savedTotalPrice);
  localStorage.setItem("totalQuantity", totalQuantity);
  localStorage.setItem("savedInitialTotal", savedInitialTotal);
  localStorage.setItem("checkedBoxes", savedCheckedBoxes);
}
