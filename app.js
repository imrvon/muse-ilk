// Hamburger Setup
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

// Set Mouse Cursor
let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove',cursor);

function cursor(e)  {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}