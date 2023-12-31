import { initializeAccordion } from "./js/features/accordionModule.js";
import { cardData, checkedCardItems } from "./js/const.js";
import { renderCard } from "./js/components/CardRenderer.js";
import { handleCheckboxChange } from "./js/components/HandleCheckbox.js";
import { setupFormValidation } from "./js/features/formValidation.js";
import { togglePopup } from "./js/features/popup.js";

document.addEventListener("DOMContentLoaded", function () {
  setupFormValidation();
  initializeAccordion();
  renderCard(cardData);
  togglePopup();

  const selectAllCheckbox = document.getElementById("select-all");

  const checkboxChangeHandler = handleCheckboxChange(
    cardData,
    checkedCardItems,
    savedTotalPrice,
    totalQuantity,
    savedInitialTotal,
    savedCheckedBoxes
  );

  document
    .querySelectorAll('input[name="card-item-checkbox"]')
    .forEach((checkbox) => {
      checkbox.addEventListener("change", checkboxChangeHandler);
    });

  selectAllCheckbox.addEventListener("change", function () {
    const allCheckboxes = document.querySelectorAll(
      'input[name="card-item-checkbox"]'
    );
    allCheckboxes.forEach((checkbox) => {
      checkbox.checked = selectAllCheckbox.checked;
    });

    checkboxChangeHandler();
  });
});

const savedTotalPrice = parseFloat(localStorage.getItem("totalPrice")) || 0;
const totalQuantity = parseInt(localStorage.getItem("totalQuantity")) || 0;
const savedInitialTotal = localStorage.getItem("savedInitialTotal") || 0;
const savedCheckedBoxes = localStorage.getItem("totalQuantity") || "";
