'use strict';

var btn = document.querySelector('#left .js-btn');
var btnMobile = document.querySelector('header .js-btn');
var menu = document.querySelector('.menu-list');
var slide2 = document.querySelector('.slide2');
var slide1 = document.querySelector('.slide1');
var leftside = document.querySelector('#left');
var rightside = document.querySelector('#right');
var checkout = document.querySelector('.checkout');
var girl1 = document.querySelector('.girl1');
var girl2 = document.querySelector('.girl2');
var girl3 = document.querySelector('.girl3');
var girl4 = document.querySelector('.girl4');
var productDescription = document.querySelector('.product-description');
var productTitle = document.querySelector('.title-wrapper .product-title');
var productPrice = document.querySelector('.title-wrapper .product-price');
var productImage = document.querySelector('.product-image');
var selection = document.querySelector('.selection-container');
var boxes = document.querySelector('.box-wrapper');
var bagIcon = document.querySelector('.bag-icon');

function init() {
	leftside.addEventListener('click', function () {
		btn.classList.toggle('is-active');
		btnMobile.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	});
	btnMobile.addEventListener('click', function () {
		btn.classList.toggle('is-active');
		btnMobile.classList.toggle('is-active');
		menu.classList.toggle('is-active');
	});
	rightside.addEventListener('click', function () {
		console.log("you hit the right side");
		checkout.classList.toggle('is-active');
	});
	bagIcon.addEventListener('click', function () {
		console.log("you hit the right side");
		checkout.classList.toggle('is-active');
	});
	// mobileMenuButton.addEventListener('click', function () {
	// 	console.log("you hit the mobile menu");
	//     mobileMenu.classList.toggle('is-active');
	// });
}

document.addEventListener('DOMContentLoaded', init);

var arrow = document.querySelectorAll('.arrow');
for (var i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener('click', function () {
		console.log("touched an arrow");
		slide1.classList.toggle('active');
		slide2.classList.toggle('active');
		// TweenMax.staggerFrom(".person", 2, {left:-2000, ease:Back.easeOut}, 0.1);
		// TweenMax.staggerFrom(".letters-wrapper", 1.2, {left:-2000, ease:Back.easeOut}, 0.1);
		// TweenMax.staggerFrom(".pattern", .6, {left:-2000, ease:Back.easeOut}, 0.1);
		// TweenMax.staggerFrom(".bg", 1.5, {left:-2000, ease:Back.easeOut}, 0.1);
	});
}

girl1.addEventListener('click', function () {
	console.log("girl1 clicked");
	selection.classList.add('active');
	boxes.classList.remove('active');
	productTitle.innerHTML = "1960s Shift Dress";
	productPrice.innerHTML = "$48";
	productImage.src = "dist/img/girl4.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
});

girl2.addEventListener('click', function () {
	console.log("girl2 clicked");
	selection.classList.add('active');
	boxes.classList.remove('active');

	productTitle.innerHTML = "Victorian Frock";
	productPrice.innerHTML = "$48";
	productImage.src = "dist/img/girl3.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
});

girl3.addEventListener('click', function () {
	console.log("girl3 clicked");
	selection.classList.add('active');
	boxes.classList.remove('active');
	productTitle.innerHTML = "1970s Patterned Dress";
	productPrice.innerHTML = "$70";
	productImage.src = "dist/img/girl2.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
});

girl4.addEventListener('click', function () {
	console.log("girl4 clicked");
	selection.classList.add('active');
	boxes.classList.remove('active');
	productTitle.innerHTML = "Disco Sequin Gown";
	productPrice.innerHTML = "$84";
	productImage.src = "dist/img/shop-image4.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
});
//# sourceMappingURL=app.js.map
