export function initializeAccordion() {
  const cardContainer = document.getElementById("card-container");
  const accordionImgContainer = document.querySelector(
    ".accordion-img-container"
  );

  const selectAllInput = document.querySelector(".select-all-input");

  const totalPrice = document.querySelector(".top-select-total");

  function toggleAccordion() {
    totalPrice.classList.toggle("hidden");
    cardContainer.classList.toggle("cards-hidden");
    accordionImgContainer.classList.toggle("accordion-active");
    selectAllInput.classList.toggle("hidden");

    accordionImgContainer.classList.toggle("rotate-arrow");
  }

  accordionImgContainer.addEventListener("click", toggleAccordion);
}
