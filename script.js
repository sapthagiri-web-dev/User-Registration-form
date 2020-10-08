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
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//success message
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check required
function checkRequired(input) {
  input.forEach(function (item) {
    if (item.value === "") {
      showError(item, getfieldName(item.id) + " is required");
    } else {
      showSuccess(item);
    }
  });
}

//check the length of input
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getfieldName(input.id)} must be atleat ${min} charcters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getfieldName(input.id)} must be less than ${max} charcters`
    );
  } else {
    showSuccess(input);
  }
}

// check password match
function checkPasswordMatch(input1, input2) {
  if (input1.value == input2.value) {
    showSuccess(input);
  } else {
    showError(input2, "passwords not matching");
    showError(input1, "passwords not matching");
  }
}

//get field name

function getfieldName(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkLength(password2, 6, 20);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
