import {
  calculateTotalPrice,
  calculateSumQuantity,
  updateTotalPrice,
  calculateInitialTotal,
} from "../calc/totalPrice.js";
import { updateLocalStorage } from "../state/localStorage.js";

export function handleCheckboxChange(
  cardData,
  checkedCardItems,
  savedTotalPrice,
  savedInitialTotal,
  savedTotalQuantity,
  savedCheckedBoxes
) {
  return function () {
    const checkedBoxes = Array.from(
      document.querySelectorAll('input[name="card-item-checkbox"]:checked')
    ).map((checkedBox) => checkedBox.id);
    savedCheckedBoxes = JSON.stringify(checkedBoxes);

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
    const sumQuantity = calculateSumQuantity(checkedCardItems);
    const initialTotal = calculateInitialTotal(checkedCardItems);

    savedTotalPrice = total; // Update saved total price
    updateTotalPrice(total, sumQuantity, initialTotal);

    updateLocalStorage(
      checkedCardItems,
      savedTotalPrice,
      sumQuantity,
      savedCheckedBoxes
    );
  };
}
