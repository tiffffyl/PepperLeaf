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

