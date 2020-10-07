const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#Email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

console.log(password.value);

// show input error message

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//check email valid
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value == "") {
    showError(username, "user name not entered");
  } else {
    showSuccess(username);
  }

  if (email.value == "") {
    showError(email, "email not entered");
  } else if (!isValidEmail(email.value)) {
    showError(email, "email entered is not correct");
  } else {
    showSuccess(email);
  }

  if (password.value == "") {
    showError(password, "password not entered");
  } else {
    showSuccess(password);
  }

  if (password2.value == "") {
    showError(password2, "password not entered");
  } else {
    showSuccess(password2);
  }
});
