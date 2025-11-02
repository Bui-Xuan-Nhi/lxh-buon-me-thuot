// set link & value phone

const numberPhone = "0942214747";
document.querySelectorAll(".set-value-phone").forEach(function (element) {
	element.textContent = numberPhone;
});
document.querySelectorAll(".set-href-phone").forEach(function (element) {
	element.href = "tel:" + numberPhone;
});

// contact method

document.addEventListener("DOMContentLoaded", function () {
	fetch("../views/contact-method.html")
		.then((response) => response.text())
		.then((data) => {
			// Lấy tất cả các phần tử có class 'header-placeholder'
			let placeholders = document.querySelectorAll(".header-placeholder");
			console.log(placeholders);
			// Lặp qua từng phần tử và chèn nội dung
			placeholders.forEach((placeholder) => {
				placeholder.innerHTML = data;
			});
		});
});

// open menu mobile

let showMenu = () => {
	const nav = document.querySelector("nav");
	const toggle = document.querySelector(".toggle-menu");
	const menuItems = document.querySelectorAll(".menu-mobile ul li a");
	const overlay = document.getElementById("body_overlay");
	const closeWindow = document.querySelector(".close-wrapper");

	toggle.onclick = function () {
		nav.classList.toggle("hide");
		overlay.style.display = "block";
	};

	// Đóng menu khi nhấp bên ngoài menu hoặc toggle
	document.onclick = function (event) {
		if (!nav.contains(event.target) && !toggle.contains(event.target)) {
			nav.classList.add("hide");
			overlay.style.display = "none";
		}
	};

	// Đóng menu khi nhấp vào một mục menu
	menuItems.forEach((item) => {
		item.onclick = function () {
			nav.classList.add("hide");
			overlay.style.display = "none";
		};
	});
	closeWindow.onclick = function () {
		nav.classList.add("hide");
		overlay.style.display = "none";
	};
};
document.getElementById("menu-son").onclick = function () {
	showMenu();
};
