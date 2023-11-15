import { calculateTotalPrice } from "../calc/totalPrice.js";
import { updateLocalStorage } from "../state/localStorage.js";
import { updateTotalPrice } from "../calc/totalPrice.js";

export function handleCheckboxChange(
  cardData,
  checkedCardItems,
  savedTotalPrice
) {
  return function () {
    const checkedBoxes = Array.from(
      document.querySelectorAll('input[name="card-item-checkbox"]:checked')
    ).map((checkedBox) => checkedBox.id);

    // Update checkedCardItems based on checkedBoxes
    checkedCardItems.length = 0; // Clear the array
    checkedBoxes.forEach((checkedBoxId) => {
      const itemId = parseInt(checkedBoxId);
      const checkedItem = cardData.find((item) => item.id === itemId);
      if (checkedItem) {
        checkedCardItems.push(checkedItem);
      }
    });

    const total = calculateTotalPrice(checkedCardItems);
    console.log(total);

    savedTotalPrice = total; // Update saved total price
    updateLocalStorage();
    updateTotalPrice(total);
  };
}
