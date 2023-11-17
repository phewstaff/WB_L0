export function setupFormValidation() {
  const form = document.querySelector(".receiver-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("submitted");

    validateName(document.getElementById("name"));
    validateName(document.getElementById("surname"));
    validateEmail(document.getElementById("email"));
    validatePhoneNumber(document.getElementById("number"));
    validateINN(document.getElementById("INN"));
  });

  function validatePhoneNumber(input, showErrorOnSubmit) {
    input.value = phoneMask(input.value);
    const value = input.value;
    const errorMessage = document.getElementById("number-error");

    input.removeAttribute("required");

    console.log(showErrorOnSubmit);

    if (value === "" || value.length !== 16) {
      errorMessage.textContent = "Введите правилный номер телефона";
      input.classList.add("error");
    } else {
      errorMessage.textContent = "";
      input.classList.remove("error");
    }

    function phoneMask(phone) {
      return phone
        .replace(/\D/g, "")
        .replace(/^(\d)/, "+$1")
        .replace(/^(\+\d{1})(\d)/, "$1($2")
        .replace(/(\d{3})(\d)/, "$1) $2")
        .replace(/(\d{3})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
    }
  }

  function validateEmail(input) {
    const value = isValidEmail(input.value.trim(""));
    const errorMessage = document.getElementById("email-error");
    input.removeAttribute("required");

    function isValidEmail(email) {
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
    }

    if (!value) {
      input.classList.add("error");
      errorMessage.textContent = "Введите валидный адрес эл.почты";
    } else {
      input.classList.remove("error");
      errorMessage.textContent = "";
    }
  }

  function validateINN(input) {
    const value = input.value.trim();
    const errorMessage = document.getElementById("INN-error");

    input.removeAttribute("required");

    if (/^\d{12}$/.test(value)) {
      input.classList.remove("error");
      errorMessage.textContent = "";
    } else {
      input.classList.add("error");
      errorMessage.textContent = "ИНН должен содержать 12 цифр.";
    }
  }

  function validateName(input) {
    const value = input.value.trim();

    const errorMessage = document.getElementById(input.id + "-error");
    input.removeAttribute("required");
    if (value === "") {
      input.classList.add("error");
      console.log(1);
      errorMessage.textContent = "Запоните поле";
    } else {
      input.classList.remove("error");
      errorMessage.textContent = "";
    }
  }

  // Add event listeners to validate on input change and focus
  const inputs = form.querySelectorAll("input");
  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const id = input.id;
      switch (id) {
        case "INN":
          validateINN(input);
          break;
        case "name":
          validateName(input);
          break;
        case "surname":
          validateName(input);
          break;
        case "email":
          validateEmail(input);
          break;
        case "number":
          validatePhoneNumber(input);
          break;
        default:
          break;
      }
    });
  });
}
