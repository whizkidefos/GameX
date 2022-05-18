'use strict';

// Toggle Elements Function
const toggleElement = (elem) => {
    return elem.classList.toggle('active');
}


// Navbar
const navbar = document.querySelector('[data-nav]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener('click', function() {
        toggleElement(navbar);
        toggleElement(document.body);
        toggleElement(overlay);
    });
}

// Go Top
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 800) {
        goTopBtn.classList.add('active');
    } else {
        goTopBtn.classList.remove('active');
    }
});