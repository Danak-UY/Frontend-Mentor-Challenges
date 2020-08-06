const form = document.querySelector("form.box");

form
  .querySelectorAll("input")
  .forEach((input) =>
    input.addEventListener("keyup", (e) => validateInput(e.target))
  );

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.querySelectorAll("input").forEach((input) => validateInput(input));
});

function validateInput(input) {
  if (input.type === "email") {
    if (input.value === "") {
      addError(input, `${input.placeholder} cannot be empty`);
    } else if (validateEmail(email)) {
      addError(input, "Looks like this is not a email");
    } else {
      removeError(input);
    }
  } else if (input.value === "") {
    addError(input, `${input.placeholder} cannot be empty`);
  } else {
    removeError(input);
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(re.test(String(email).toLowerCase()));
  return re.test(String(email).toLowerCase());
}

function addError(elem, text) {
  elem.parentNode.classList.add("error");
  elem.nextElementSibling.innerText = text;
}

function removeError(elem) {
  elem.parentNode.classList.remove("error");
}
