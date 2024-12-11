document.querySelector(".welcom-msg h1").innerHTML +=
  localStorage.getItem("userName");

let logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {
  console.log("hello");
  localStorage.removeItem("userName");
  location = "./index.html";
});
