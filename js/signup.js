let emailInput = document.getElementById("emailInput");
let nameInput = document.getElementById("nameInput");
let passInput = document.getElementById("passInput");
let emailMsg = document.getElementById("emailMsg");
let nameMsg = document.getElementById("nameMsg");
let requiredMsg = document.getElementById("requiredMsg");
let notValidMsg = document.getElementById("notValidMsg");
let validMsg = document.getElementById("validMsg");
let emailExistMsg = document.getElementById("emailExisMsg");
let signinHref = document.getElementById("signinHref");

let passMsg = document.getElementById("passMsg");

let signupBtn = document.getElementById("signupBtn");
let userList = [];
if (JSON.parse(localStorage.getItem("userContainer")) != null) {
  userList = JSON.parse(localStorage.getItem("userContainer"));
}

signupBtn.addEventListener("click", function () {
  validMsg.classList.add("d-none");
  emailExistMsg.classList.add("d-none");
  if (
    nameInput.value.length === 0 ||
    emailInput.value.length === 0 ||
    passInput.value.length === 0
  ) {
    requiredMsg.classList.remove("d-none");
  } else if (
    validationUser(nameInput, nameMsg) &&
    validationUser(emailInput, emailMsg) &&
    validationUser(passInput, passMsg)
  ) {
    let user = {
      name: nameInput.value,
      email: emailInput.value,
      password: passInput.value,
    };
    if (checkExistEmail() === true) {
      emailExistMsg.classList.remove("d-none");
    } else {
      userList.push(user);
      localStorage.setItem("userContainer", JSON.stringify(userList));
      validMsg.classList.remove("d-none");
      window.location = "./index.html";
    }
  }
});

function validationUser(element, msg) {
  let term = element.value;
  let regex = {
    nameInput: /^[a-zA-z-_][a-zA-Z0-9-_]{2,19}$/,
    emailInput: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    passInput:
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
  };
  if (regex[element.id].test(term)) {
    element.classList.add("is-valid");
    element.classList.remove("is-invalid");
    msg.classList.add("d-none");
    console.log("hello");

    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    msg.classList.remove("d-none");

    return false;
  }
}

emailInput.addEventListener("input", function () {
  validationUser(emailInput, emailMsg);
});
nameInput.addEventListener("input", function () {
  validationUser(nameInput, nameMsg);
});

passInput.addEventListener("input", function () {
  validationUser(passInput, passMsg);
});

function checkExistEmail() {
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].email === emailInput.value) {
      return true;
    }
  }
}

signinHref.addEventListener("click", function () {
  window.location = "./index.html";
});
