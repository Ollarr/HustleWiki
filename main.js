// formEl.addEventListener("input", formHandler);

"use strict";

// navbar variables
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
	nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// theme toggle variables
const themeBtn = document.querySelectorAll(".theme-btn");

for (let i = 0; i < themeBtn.length; i++) {
	themeBtn[i].addEventListener("click", function () {
		// toggle `light-theme` & `dark-theme` class from `body`
		// when clicked `theme-btn`
		document.body.classList.toggle("light-theme");
		document.body.classList.toggle("dark-theme");

		for (let i = 0; i < themeBtn.length; i++) {
			// When the `theme-btn` is clicked,
			// it toggles classes between `light` & `dark` for all `theme-btn`.
			themeBtn[i].classList.toggle("light");
			themeBtn[i].classList.toggle("dark");
		}
	});
}

// login-modal
document.querySelector("#show-login").addEventListener("click", function () {
	document.querySelector(".popup").classList.add("active");
});

document
	.querySelector(".popup .close-btn")
	.addEventListener("click", function () {
		document.querySelector(".popup").classList.remove("active");
	});

// BLOG SECTION- TABLE OF CONTENT
const toggle = document.querySelector(".toggle");
const nav_bar = document.querySelector(".table-of-contents");
const list = document.querySelector(".table__list");

toggle.addEventListener("click", () => {
	if (toggle.textContent === "[hide]") {
		toggle.textContent = "[show]";
	} else {
		toggle.textContent = "[hide]";
	}

	list.classList.toggle("list-invisible");
	nav_bar.classList.toggle("table-narrow");
});

// body{background: #eee}.date{font-size: 11px}.comment-text{font-size: 12px}.fs-12{font-size: 12px}.shadow-none{box-shadow: none}.name{color: #007bff}.cursor:hover{color: blue}.cursor{cursor: pointer}.textarea{resize: none}
