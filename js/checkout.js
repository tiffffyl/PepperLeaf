let currentSection = 0;

function nextPage(sectionIndex) {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.transform = `translateX(-${sectionIndex * 100}%)`;
    currentSection = sectionIndex;
    toggleBackButton();
}

function goBack(sectionIndex) {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.transform = `translateX(-${sectionIndex * 100}%)`;
    currentSection = sectionIndex;
    toggleBackButton();
}

function toggleBackButton() {
    const backBtn1 = document.getElementById('backBtn1');
    const backBtn2 = document.getElementById('backBtn2');
    const backBtn3 = document.getElementById('backBtn3');
    
    backBtn1.classList.add('hidden');
    backBtn2.classList.add('hidden');
    backBtn3.classList.add('hidden');

    if (currentSection === 1) {
        backBtn2.classList.remove('hidden');
    } else if (currentSection === 2) {
        backBtn3.classList.remove('hidden');
    }
}