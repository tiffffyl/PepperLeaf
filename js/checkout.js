let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
    if (window.innerWidth < 768 && currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
    } else if (window.innerWidth >= 768 && currentPage < pages.length - 1) {
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
        pages[currentPage - 1].style.transform = 'translateX(-100%)';
    }
}

function prevPage() {
    if (window.innerWidth < 768 && currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
    } else if (window.innerWidth >= 768 && currentPage > 0) {
        pages[currentPage].classList.remove('active');
        currentPage--;
        pages[currentPage].classList.add('active');
        pages[currentPage + 1].style.transform = 'translateX(100%)';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Initially, set the left position of the first method to 0 and others to 100%
    var methods = document.querySelectorAll('.payment-method');
    methods.forEach(function(method, index) {
        if (index === 0) {
            method.style.left = '0';
        } else {
            method.style.left = '100%';
        }
    });
});

function changePaymentMethod(methodIndex) {
    

    var labels = document.querySelectorAll('.payment-method-slider label');
    labels.forEach(function(label, index) {
        if (index + 1 === methodIndex) {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });

    var methods = document.querySelectorAll('.payment-method');
    methods.forEach(function(method, index) {
        if (index + 1 === methodIndex) {
            method.style.left = '0';
        } else {
            method.style.left = '100%';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('.payment-input');
    inputFields.forEach(function(inputField) {
        inputField.addEventListener('input', function() {
            const inputValue = this.value;
            const inputId = this.id;
            const displayElement = document.querySelector(`.input-display.${inputId}`);
            if (displayElement) {
                displayElement.textContent = inputValue;
            }
        });
    });
});
