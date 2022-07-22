// Hamburger Setup
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
});

// Set Mouse Cursor
let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('a');

window.addEventListener('mousemove',cursor);

function cursor(e)  {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

// Reduce Mouse Cursor Size on Hover
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-reduce');
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-reduce');
    });
});

// Move Background Image
document.addEventListener("mousemove", parallax);
function parallax(a) {
    this.querySelectorAll(".movenow").forEach(function(move) {
        var moving_value = move.getAttribute('data-speed');

        var x = (a.clientX * moving_value)/250;
        var y = (a.clientY * moving_value)/250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}

// Scroll Sections

var firstsec = document.getElementsByClassName('.main-container');
var secondsec = document.getElementsByClassName('.second-container');
document.onscroll = function scroll() {
  secondsec.scrollIntoView({behavior: "smooth"});
 }