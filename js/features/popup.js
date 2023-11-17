export function togglePopup() {
  const modals = document.querySelectorAll("[data-modal]");

  console.log(modals);

  modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      console.log("111");
      event.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add("open");
      const exits = modal.querySelectorAll(".modal-exit");
      exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
          event.preventDefault();
          modal.classList.remove("open");
        });
      });
    });
  });
}
