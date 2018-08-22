var btn = document.querySelector('#left .js-btn');
var btnMobile = document.querySelector('header .js-btn');
var menu = document.querySelector('.menu-list');
var slide2 = document.querySelector('.slide2');
var slide1 = document.querySelector('.slide1');
var leftside = document.querySelector('#left');
var rightside = document.querySelector('#right');
var checkout =	document.querySelector('.checkout');


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


var current = 0;
var slides = document.querySelectorAll(".slide");



var rightarrows = document.querySelectorAll('.right-arrow');
var leftarrows = document.querySelectorAll('.left-arrow');


var nextSlide = function() {

	console.log("right arrow clicked!");
	console.log(current);
	slides[current].classList.remove("active");
	current++;
	if (current === slides.length) {
		current = 0;
	}
	slides[current].classList.add("active");
	// TweenMax.staggerFrom(".person", 2, {right:-2000, ease:Back.easeOut}, 0.1);
	// TweenMax.staggerFrom(".girlsitting1", 2, {right:-2000, ease:Back.easeOut}, 0.1);
	// TweenMax.staggerFrom(".girlsitting2", 2, {right:-2000, ease:Back.easeOut}, 0.1);
	// TweenMax.staggerFrom(".letters-wrapper", 1.2, {right: 2000, ease:Back.easeOut}, 0.1);
	// TweenMax.staggerFrom(".pattern", .6, {right: -2000, ease:Back.easeOut}, 0.1);
	// TweenMax.staggerFrom(".bg", 1.5, {right:-2000, ease:Back.easeOut}, 0.1);


}

var prevSlide = function() {

	console.log("right arrow clicked!");
	console.log(current);
	slides[current].classList.remove("active");
	current--;
	if (current < 0) {
		current = slides.length - 1;
	}
	slides[current].classList.add("active");
}

// setInterval(nextSlide, 8000 );


for (var i = 0; i < rightarrows.length; i++) {
	var rightarrow = rightarrows[i];
	rightarrow.addEventListener('click', nextSlide);
}

for (var i = 0; i < leftarrows.length; i++) {
	var leftarrow = leftarrows[i];
	leftarrow.addEventListener('click', prevSlide);
}

// TweenMax.staggerFrom(".person", 2, {left:-2000, ease:Back.easeOut}, 0.1);
// TweenMax.staggerFrom(".letters-wrapper", 1.2, {left:-2000, ease:Back.easeOut}, 0.1);
// TweenMax.staggerFrom(".pattern", .6, {left:-2000, ease:Back.easeOut}, 0.1);
// TweenMax.staggerFrom(".bg", 1.5, {left:-2000, ease:Back.easeOut}, 0.1);


// girl1.addEventListener('click', function(){
// 	console.log("girl1 clicked");
// 	selection.classList.add('active');
// 	boxes.classList.remove('active');
// 	productTitle.innerHTML = "1960s Shift Dress";
// 	productPrice.innerHTML = "$48";
// 	productImage.src = "dist/img/girl4.png";
// 	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
// 	swatch.style.backgroundImage = "url(dist/img/swatch1.png)";
// 	swatch2.style.backgroundImage = "url(dist/img/swatch_1.png)";

// });

// girl2.addEventListener('click', function(){
// 	console.log("girl2 clicked");
// 	selection.classList.add('active');
// 	boxes.classList.remove('active');	
// 	productTitle.innerHTML = "Victorian Frock";
// 	productPrice.innerHTML = "$48";
// 	productImage.src = "dist/img/girl3.png";
// 	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
// 	swatch.style.backgroundImage = "url(dist/img/swatch2.png)";
// 	swatch2.style.backgroundImage = "url(dist/img/swatch_2.png)";
// });

// girl3.addEventListener('click', function(){
// 	console.log("girl3 clicked");
// 	selection.classList.add('active');
// 	boxes.classList.remove('active');
// 	productTitle.innerHTML = "1970s Patterned Dress";
// 	productPrice.innerHTML = "$70";
// 	productImage.src = "dist/img/girl2.png";
// 	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
// 	swatch.style.backgroundImage = "url(dist/img/swatch3.png)";
// 	swatch2.style.backgroundImage = "url(dist/img/swatch_3.png)";
// });

// girl4.addEventListener('click', function(){
// 	console.log("girl4 clicked");
// 	selection.classList.add('active');
// 	boxes.classList.remove('active');
// 	productTitle.innerHTML = "Disco Sequin Gown";
// 	productPrice.innerHTML = "$84";
// 	productImage.src = "dist/img/shop-image4.png";
// 	productDescription.innerHTML = "This classic suit is cut from lustrous, sexy viscose and features a neat button-up collar and knife pleats through the skirt. The fir is the right kind of boxy, loose at the waist, but has a completely different feel when you style the collar unfastneed and wear one of our scarves, as a belt, at the waist. ";
// 	swatch.style.backgroundImage = "url(dist/img/swatch4.png)";
// 	swatch2.style.backgroundImage = "url(dist/img/swatch_4.png)";
// });









