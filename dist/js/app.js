'use strict';

var btn = document.querySelector('.js-btn');
var menu = document.querySelector('.menu-list');
var slide2 = document.querySelector('.slide2');
var slide1 = document.querySelector('.slide1');
var leftside = document.querySelector('#left');

function init() {
				leftside.addEventListener('click', function () {
								btn.classList.toggle('is-active');
								menu.classList.toggle('is-active');
				});
}

document.addEventListener('DOMContentLoaded', init);

var arrow = document.querySelectorAll('.arrow'),
    result;
for (var i = 0; i < arrow.length; i++) {
				result = arrow[i];
				result.addEventListener('click', function () {
								console.log("touched an arrow");
								slide1.classList.toggle('active');
								slide2.classList.toggle('active');
				});
}
//# sourceMappingURL=app.js.map
