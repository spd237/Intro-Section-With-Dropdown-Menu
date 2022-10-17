"use strict";

const featuresDrpDwn = document.querySelector(".features");
const companyDrpDwn = document.querySelector(".company");
const navigation = document.querySelector(".nav");
const openMenu = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-menu-icon");

featuresDrpDwn.addEventListener("click", (e) => {
  featuresDrpDwn.nextElementSibling.classList.toggle("hidden");
  featuresDrpDwn.lastChild.classList.toggle("arrow-up");
});

companyDrpDwn.addEventListener("click", (e) => {
  companyDrpDwn.nextElementSibling.classList.toggle("hidden");
  companyDrpDwn.lastChild.classList.toggle("arrow-up");
});

openMenu.addEventListener("click", (e) => {
  navigation.classList.add("active");
});

closeMenu.addEventListener("click", (e) => {
  navigation.classList.remove("active");
});
