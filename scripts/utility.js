// //  open and close nav
import { navbar, footer } from "../components/headfoot.js";

document.querySelector(".navigation").innerHTML = navbar();
document.querySelector("footer").innerHTML = footer();

let count = 0;
document.querySelector("#navbar-toggle").addEventListener("click", () => {
  if (count % 2 == 0) {
    let elements = document.querySelector(".nav-list");
    elements.style.top = "55px";
    count++;
  } else {
    let elements = document.querySelector(".nav-list");
    elements.style.top = "-100%";
    count++;
  }
});

document.querySelector("#navbar-toggle").addEventListener("click", () => {
  document.querySelector("#navbar-toggle").classList.toggle("active");
});
let nextSibling = () => {
  return document.querySelector(".navbar-dropdown").nextElementSibling;
};
// // If a link has a dropdown, add sub menu toggle.

// // Click outside the dropdown will remove the dropdown class
// $("html").click(function () {
//   $(".navbar-dropdown").hide();
// });

//  open and close nav
// $("#navbar-toggle").click(function () {
//   $("nav ul").slideToggle();
// });

// Hamburger toggle
// $("#navbar-toggle").on("click", function () {
//   this.classList.toggle("active");
// });

// If a link has a dropdown, add sub menu toggle.
// $("nav ul li a:not(:only-child)").click(function (e) {
//   $(this).siblings(".navbar-dropdown").slideToggle("slow");

//   // Close dropdown when select another dropdown
//   $(".navbar-dropdown").not($(this).siblings()).hide("slow");
//   e.stopPropagation();
// });

var items = document.querySelectorAll(".carousel .item");
var dots = document.querySelectorAll(".carousel-indicators li");
var currentItem = 0;
var isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function goToItem(n) {
  if (n < currentItem) {
    hideItem("to-right");
    currentItem = n;
    showItem("from-left");
  } else {
    hideItem("to-left");
    currentItem = n;
    showItem("from-right");
  }
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  dots[currentItem].classList.remove("active");
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  dots[currentItem].classList.add("active");
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

document
  .querySelector(".carousel-control.left")
  .addEventListener("click", function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

document
  .querySelector(".carousel-control.right")
  .addEventListener("click", function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });

document
  .querySelector(".carousel-indicators")
  .addEventListener("click", function (e) {
    var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
    if (target !== currentItem && target < dots.length) {
      goToItem(target);
    }
  });
