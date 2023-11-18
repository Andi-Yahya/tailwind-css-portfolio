// Hamburger

const hamburger = document.querySelector("#hamburger");

// hamburger.addEventListener("click", () => {
// 	hamburger.classList.toggle("hamburger-active");
// });
const navMenu = document.querySelector("#nav-menu");

hamburger.onclick = function () {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
};

// Navbar  Fixed
// window.addEventListener('scroll', ()=>{
//     const header = document.querySelector("header");
//     const fixedNav = header.offsetTop;

//     if(window.scrollY > fixedNav) {
//         header.classList.add('navbar-fixed')
//     } else {
//         header.classList.remove ('navbar-fixed')
//     }

// })

window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;

	if (window.scrollY > fixedNav) {
		header.classList.add("navbar-fixed");
	} else {
		header.classList.remove("navbar-fixed");
	}
};
