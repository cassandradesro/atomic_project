'use strict';

var girls = document.querySelectorAll('.girl');
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
var swatch = document.querySelector('.swatch1');
var swatch2 = document.querySelector('.swatch2');

// generic stuff that happens when you click any of the girls
girls.forEach(function (girl) {
	girl.addEventListener('click', function () {
		var _this = this;

		selection.classList.add('active');

		document.querySelector(".text-wrapper").innerHTML = "";
		TweenMax.to(this.querySelector('.box img:nth-child(1)'), 1, { opacity: 0 });

		girls.forEach(function (girl) {
			if (girl == _this) {
				// animate the one that got clicked this way
				// slide the chosen girl over to the left
			} else {
				// animate the other girls this way
				TweenMax.to(girl, .5, { opacity: 0 });
			}
		});
	});
});

// stuff that happens specific to girl 1
girl1.addEventListener('click', function () {

	console.log("girl1 clicked");
	// TweenMax.staggerTo([".girl2", ".girl3", ".girl4"], .5, {opacity:0}, 0.2);
	// boxes.classList.remove('active');
	productTitle.innerHTML = "1960s Shift Dress";
	productPrice.innerHTML = "$48";
	// productImage.src = "dist/img/girl4.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
	swatch.style.backgroundImage = "url(dist/img/swatch1.png)";
	swatch2.style.backgroundImage = "url(dist/img/swatch_1.png)";
});

// stuff that happens specific to girl 2

girl2.addEventListener('click', function () {
	console.log("girl2 clicked");
	selection.classList.add('active');
	boxes.classList.remove('active');
	productTitle.innerHTML = "Victorian Frock";
	productPrice.innerHTML = "$48";
	productImage.src = "dist/img/girl3.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
	swatch.style.backgroundImage = "url(dist/img/swatch2.png)";
	swatch2.style.backgroundImage = "url(dist/img/swatch_2.png)";
});

girl3.addEventListener('click', function () {
	console.log("girl3 clicked");
	selection.classList.add('active');
	boxes.classList.remove('active');
	productTitle.innerHTML = "1970s Patterned Dress";
	productPrice.innerHTML = "$70";
	productImage.src = "dist/img/girl2.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
	swatch.style.backgroundImage = "url(dist/img/swatch3.png)";
	swatch2.style.backgroundImage = "url(dist/img/swatch_3.png)";
});

girl4.addEventListener('click', function () {
	console.log("girl4 clicked");
	selection.classList.add('active');
	boxes.classList.remove('active');
	productTitle.innerHTML = "Disco Sequin Gown";
	productPrice.innerHTML = "$84";
	productImage.src = "dist/img/girl5.png";
	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
	swatch.style.backgroundImage = "url(dist/img/swatch4.png)";
	swatch2.style.backgroundImage = "url(dist/img/swatch_4.png)";
});
//# sourceMappingURL=shop.js.map
