let BtnTogle = document.querySelector(".nav-toggle-btn");
let Menu = document.querySelector(".link-list");
let VewDetails = document.querySelector(".btn-img");
let BtnSignIn = document.querySelector(".btn-sign-in");
let cards = document.querySelector(".cards");
let SignIn = document.querySelector(".displaynone");
let SignUp = document.querySelector(".displaynone-up");
let BtnSignUp = document.querySelector(".btn-sign-up");
let ShowAds = document.querySelector(".ads");
let BtnAds = document.querySelector(".icon-ads");
let BtnSignInNone = document.querySelector(".icon-sign-in");
let BtnSignUpNone = document.querySelector(".icon-sign-up");

BtnTogle.addEventListener("click", () => {
  Menu.classList.toggle("active-list");
  BtnTogle.classList.toggle("active");
});

VewDetails.addEventListener("click", function () {
  window.location = "../../index-details-hell.html";
});
BtnSignIn.addEventListener("click", () => {
  cards.style.display = "none";
  SignIn.style.display = "flex";
});

BtnSignUp.addEventListener("click", () => {
  cards.style.display = "none";
  SignUp.style.display = "flex";
});
setInterval(() => {
  cards.style.display = "none";
  ShowAds.style.display = "flex";
}, 300000);

BtnAds.addEventListener("click", () => {
  cards.style.display = "flex";
  ShowAds.style.display = "none";
});

BtnSignInNone.addEventListener("click", () => {
  cards.style.display = "flex";
  SignIn.style.display = "none";
});

BtnSignUpNone.addEventListener("click", () => {
  cards.style.display = "flex";
  SignUp.style.display = "none";
});
// overflow: hidden;
// display: flex;
