//Importing recipe books
import { recipeBook } from "/js/recipes.js";

const container = document.querySelector('.container');

let isDown = false;
let startX;
let scrollLeft;
//Swiping functionality
container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});
container.addEventListener('mouseleave', () => {
    isDown = false;
});
container.addEventListener('mouseup', () => {
    isDown = false;
});
container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed
    container.scrollLeft = scrollLeft - walk;
});

//Next & prev button
function nextSection() {
    container.scrollBy({
        left: window.innerWidth,
        behavior: 'smooth'
    });
}

function prevSection() {
    container.scrollBy({
        left: -window.innerWidth,
        behavior: 'smooth'
    });
}


/*dropdown*/
document.addEventListener('DOMContentLoaded', function () {
    var headers = document.querySelectorAll('.dropdown-header');

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            var isActive = this.classList.contains('active');

            // Collapse all dropdowns
            document.querySelectorAll('.dropdown-content').forEach(function (item) {
                item.style.display = 'none';
            });
            document.querySelectorAll('.dropdown-header').forEach(function (item) {
                item.classList.remove('active');
            });

            // Toggle the current dropdown
            if (!isActive) {
                content.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});

/*Loading recipe*/
document.addEventListener('DOMContentLoaded', function () {
    
});