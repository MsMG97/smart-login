let userList = [];
userList = JSON.parse(localStorage.getItem("userContainer"));
console.log(userList);

let loginBtn = document.getElementById("loginBtn");

let emailInput = document.getElementById("emailInput");

let passInput = document.getElementById("passInput");
let requiredMsg = document.getElementById("requiredMsg");
let signupHref = document.getElementById("signupHref");
let emailMsg = document.getElementById("emailMsg");
let passMsg = document.getElementById("passMsg");

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
passInput.addEventListener("input", function () {
  validationUser(passInput, passMsg);
});

loginBtn.addEventListener("click", function () {
  let email = emailInput.value;
  let pass = passInput.value;

  if (email.length === 0 || pass.length === 0) {
    requiredMsg.classList.remove("d-none");
  } else if (
    validationUser(emailInput, emailMsg) &&
    validationUser(passInput, passMsg)
  ) {
    for (let i = 0; i < userList.length; i++) {
      if (email === userList[i].email && pass === userList[i].password)
        window.location = "./home.html";

      localStorage.setItem("userName", userList[i].name);
    }
  }
});

signupHref.addEventListener("click", function () {
  location = "./signup.html";
});
