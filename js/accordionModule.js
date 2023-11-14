export function initializeAccordion() {
  const cardContainer = document.getElementById("card-container");
  const accordionImgContainer = document.querySelector(
    ".accordion-img-container"
  );

  function toggleAccordion() {
    cardContainer.classList.toggle("cards-hidden");
    accordionImgContainer.classList.toggle("accordion-active");

    accordionImgContainer.classList.toggle("rotate-arrow");
  }

  accordionImgContainer.addEventListener("click", toggleAccordion);
}
