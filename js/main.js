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
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
	loginForm.style.marginLeft = "-50%";
	loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
	loginForm.style.marginLeft = "0%";
	loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
	signupBtn.click();
	return false;
};

// login modal popup
document.querySelector("#show-login").addEventListener("click", () => {
	document.querySelector(".popup").classList.add("active");
});

// code to close form
document.querySelector(".popup-close-btn").addEventListener("click", () => {
	document.querySelector(".popup").classList.remove("active");
});

// show/hide password
let showHidePw = document.querySelectorAll(".fa-eye");

showHidePw.forEach((eyeIcon) => {
	eyeIcon.addEventListener("click", () => {
		let pwFields =
			eyeIcon.parentElement.parentElement.querySelectorAll(".password");

		pwFields.forEach((password) => {
			if (password.type === "password") {
				password.type = "text";
				eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
				return;
			}
			password.type = "password";
			eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
		});
	});
});

// BLOG SECTION- TABLE OF CONTENT
const toggle = document.querySelector(".toggle");
const nav_bar = document.querySelector(".table-of-contents");
const list = document.querySelector(".table-list");

toggle.addEventListener("click", () => {
	if (toggle.textContent === "[hide]") {
		toggle.textContent = "[show]";
	} else {
		toggle.textContent = "[hide]";
	}

	list.classList.toggle("list-invisible");
	nav_bar.classList.toggle("table-narrow");
});
