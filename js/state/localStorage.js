export function updateLocalStorage(
  checkedCardItems,
  savedTotalPrice,
  totalQuantity,
  savedCheckedBoxes
) {
  localStorage.setItem("checkedItems", JSON.stringify(checkedCardItems));
  localStorage.setItem("totalPrice", savedTotalPrice);
  localStorage.setItem("totalQuantity", totalQuantity);
  localStorage.setItem("checkedBoxes", savedCheckedBoxes);
}
