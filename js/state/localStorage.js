export function updateLocalStorage(checkedCardItems, savedTotalPrice) {
  localStorage.setItem("checkedItems", JSON.stringify(checkedCardItems));
  localStorage.setItem("totalPrice", savedTotalPrice);
}
