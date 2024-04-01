let BtnTogle = document.querySelector(".nav-toggle-btn");
let Menu = document.querySelector(".link-list");
let VewDetails = document.querySelector(".btn-img");

BtnTogle.addEventListener("click", () => {
  Menu.classList.toggle("active-list");
  BtnTogle.classList.toggle("active");
});

VewDetails.addEventListener("click", function () {
  window.location = "../../index-details-hell.html";
});
