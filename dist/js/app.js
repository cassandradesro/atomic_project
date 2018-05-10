'use strict';

var btn = document.querySelector('.js-btn');

function init() {
    btn.addEventListener('click', function () {
        btn.classList.toggle('is-active');
    });
}

document.addEventListener('DOMContentLoaded', init);
//# sourceMappingURL=app.js.map
