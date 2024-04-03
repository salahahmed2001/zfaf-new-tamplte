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
let VewHotels = document.querySelector(".hotels");
let VewHalls = document.querySelector(".halls");
let Planning = document.querySelector(".planning");
let Individuals = document.querySelector(".individuals");
let Detls = document.querySelector(".detls");
let BtnNext = document.querySelector(".next");
let PlanningGrob = document.querySelector(".planning-grob");
let BtnNextContact = document.querySelector(".next-contact");
let BtnBack = document.querySelector(".back");
let Contact = document.querySelector(".contact");
let BtnBackContact = document.querySelector(".back-detls");
let Send = document.querySelector(".send");

BtnTogle.addEventListener("click", () => {
  Menu.classList.toggle("active-list");
  BtnTogle.classList.toggle("active");
});

BtnSignIn.addEventListener("click", () => {
  SignIn.style.display = "flex";
});

BtnSignUp.addEventListener("click", () => {
  SignUp.style.display = "flex";
});

BtnSignInNone.addEventListener("click", () => {
  SignIn.style.display = "none";
});

BtnSignUpNone.addEventListener("click", () => {
  SignUp.style.display = "none";
});
setInterval(() => {
  ShowAds.style.display = "flex";
}, 300000);

BtnAds.addEventListener("click", () => {
  ShowAds.style.display = "none";
});
VewDetails.addEventListener("click", function () {
  window.location = "../../index-details-hell.html";
});

VewHalls.addEventListener("click", () => {
  Planning.style.right = "-3000px";
  Individuals.style.left = "0px";
  PlanningGrob.style.height = "150vh";
});

VewHotels.addEventListener("click", () => {
  Planning.style.right = "-3000px";
  Individuals.style.left = "0px";
  PlanningGrob.style.height = "140vh";
});
BtnNext.addEventListener("click", () => {
  if (
    document.querySelector(".radio1").checked ||
    document.querySelector(".radio2").checked ||
    document.querySelector(".radio3").checked ||
    document.querySelector(".radio4").checked ||
    document.querySelector(".radio5").checked ||
    document.querySelector(".radio6").checked ||
    document.querySelector(".radio7").checked
  ) {
    Individuals.style.display = "none";
    Detls.style.left = "0px";
    PlanningGrob.style.height = "90vh";
  } else {
    document.querySelector(".warning-radio").innerHTML = "برجاء اختيار سعر ";
  }
});
BtnBack.addEventListener("click", () => {
  setTimeout(() => {
    Individuals.style.display = "flex";
  }, 200);
  Individuals.style.right = "0px";
  Detls.style.left = "-150%";
  PlanningGrob.style.height = "140vh";
});
BtnNextContact.addEventListener("click", () => {
  let Textarea = document.querySelector("textarea");
  if (Textarea.value != "") {
    Detls.style.display = "none";
    Contact.style.left = "0px";
    PlanningGrob.style.height = "120vh";
  } else {
    document.querySelector(".warning-text").innerHTML =
      "لا يمكن ترك الحقل فارغ";
  }
});
BtnBackContact.addEventListener("click", () => {
  setTimeout(() => {
    Detls.style.display = "flex";
  }, 200);
  Detls.style.right = "0px";
  Contact.style.left = "-100%";
  PlanningGrob.style.height = "90vh";
});
Send.addEventListener("click", () => {
  let InputName = document.querySelector("input[name=text]");
  let InputEmail = document.querySelector("input[name=email]");
  let InputPhone = document.querySelector("input[name=phone]");
  let InputDate = document.querySelector("input[name=date]");
  let InputCity = document.querySelector("input[name=city]");
  let checkbox = document.querySelector("label[for=checkbox]");
  if (InputName.value != "") {
  } else {
    document.querySelector(".warning-nameall").innerHTML = "برجاء كتابة الاسم";
  }
  if (InputEmail.value != "") {
  } else {
    document.querySelector(".warning-email").innerHTML =
      "برجاء كتابة البريد الالكتروني";
  }
  if (InputPhone.value != "") {
  } else {
    document.querySelector(".warning-tel").innerHTML = "برجاء كتابة رقم الهاتف";
  }
  if (InputDate.value != "") {
  } else {
    document.querySelector(".warning-date").innerHTML = "يجب ادخال موعد الزفاف";
  }
  if (InputCity.value != "") {
  } else {
    document.querySelector(".warning-city").innerHTML = "يجب ادخال المدينة";
  }
  if (document.querySelector("label[for=checkbox]").checked) {
  } else {
    checkbox.style.color = "red";
  }
});
