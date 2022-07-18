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

/* .categories {
		margin-bottom: 3rem;
	}

	.categories-btn {
		display: flex;
		align-items: stretch;
		background: var(--background-primary);
		border-radius: 10px;
		box-shadow: 0 5px 5px hsla(0, 0%, 0%, 0.05);
		overflow: hidden;
	}

	.categories-btn:not(:last-child) {
		margin-bottom: 1rem;
	}

	.categories-btn .icon-box {
		font-size: 22px;
		width: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--action-primary);
		color: var(--foreground-secondary);
	}

	.categories-btn:hover .icon-box {
		background: var(--accent);
		color: var(--white);
	}

	.categories-btn ion-icon {
		--ionicon-stroke-width: 40px;
	}

	.categories-btn p {
		padding: 15px;
		color: var(--foreground-secondary);
		font-weight: 700;
	}

	.tags {
		margin-bottom: 3rem;
	}

	.tags .wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 0.2rem;
	}

	.tags .hashtag {
		background: var(--action-primary);
		color: var(--foreground-secondary);
		padding: 5px 10px;
		font-size: var(--fs-5);
		font-weight: 700;
		border-radius: 5px;
	}

	.tags .hashtag:hover {
		background: var(--foreground-secondary);
		color: var(--action-primary);
	}
	.latest-posts {
		margin-bottom: 3rem;
	}

	.latest-post .wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 0.2rem;
	}
	.latest-post-item {
		display: grid;
		grid-template-columns: 100px 1fr;
		gap: 8px;
		margin-bottom: 4px;
	}

	.latest-post-item-image {
		border-radius: 4px;
		width: 100px;
		height: 100px;
	}
	.latest-post-heading {
		color: var(--foreground-secondary);
		margin-bottom: 1rem;
		text-align: center;
		line-height: 1.3;
	}
	.latest-post-item-title {
		font-size: 18px;
		font-weight: 700;
	}
	.latest-post-item-title a {
		color: rgb(83, 81, 81);
	}
	.latest-post-item-excerpt {
		font-size: 12px;
	}

	.latest-post-item-meta {
		color: var(--foreground-secondary);

		font-size: 12px;
		font-style: italic;
	}
	.latest-post-item-hashtag {
		display: inline;
		background: var(--action-primary);
		color: var(--foreground-secondary);
		padding: 5px 5px;
		font-size: var(--fs-5);
		font-weight: 700;
		border-radius: 5px;
	}
	.latest-post-item-hashtag:hover {
		background: var(--foreground-secondary);
		color: var(--action-primary);
	}

	/* .contact {
		margin-bottom: 3rem;
	}

	.contact p {
		color: var(--foreground-secondary);
		margin-bottom: 1rem;
	}

	.social-link {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.social-link .icon-box {
		width: 45px;
		height: 45px;
		background: var(--action-secondary);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 22px;
	}

	.social-link .discord {
		color: hsl(235, 86%, 65%);
	}

	.social-link .twitter {
		color: hsl(203, 89%, 53%);
	}

	.social-link .facebook {
		color: hsl(220, 46%, 48%);
	}

	.social-link .icon-box:hover {
		background: var(--accent);
		color: var(--white);
	}

	.newsletter {
		position: sticky;
		top: 3rem;
		margin-bottom: 98px;
	}

	.newsletter p {
		color: var(--foreground-secondary);
		margin-bottom: 1rem;
	}

	.newsletter input {
		border: none;
		background: var(--action-primary);
		display: block;
		width: 100%;
		padding: 0.5rem 1rem;
		font: inherit;
		color: var(--foreground-secondary);
		border-radius: 5px;
		margin-bottom: 1rem;
	}

	.newsletter input::placeholder {
		color: inherit;
	}

	.newsletter input:focus {
		outline: 2px solid;
		outline-offset: 0;
	} */

/* .newsletter .btn-primary {
		margin-inline: auto;
		margin: auto; /* fallback for margin-inline
} */

/* single article blog-page
	.single-blog-aside-left {
		display: inline-block;
		align-self: center;
	}
	.single-blog-aside-right {
		display: inline-block;
		align-self: center;
	}
	
	.single-blog-aside-right .wrapper {
		background: var(--background-primary);
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 5px 5px hsla(0, 0%, 0%, 0.05);
	}

	.single-blog-aside-right .tags h2 {
		color: var(--foreground-secondary);
		margin-bottom: 1rem;
		text-align: center;
		line-height: 1.3;
	}
	.single-blog-main-article .wrapper {
		background: var(--background-primary);
		border-radius: 10px;
		padding: 20px;
		box-shadow: 0 5px 5px hsla(0, 0%, 0%, 0.05);
	} */
