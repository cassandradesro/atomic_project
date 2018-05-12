'use strict';

var btn = document.querySelector('.js-btn');
var menu = document.querySelector('.menu-list');

function init() {
    btn.addEventListener('click', function () {
        btn.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
}

document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=app.js.map
