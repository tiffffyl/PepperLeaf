//Keep track of hamburger menu
var isMenuOpen = false;

function toggleMenu() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.classList.toggle('show');
  
  document.querySelector('.navbar-container').classList.toggle('nav-open');
  isMenuOpen = !isMenuOpen;
  
  var iconSrc = isMenuOpen ? '/Assets/icons/close-hamburger.svg' : '/Assets/icons/hamburger.svg';
  document.querySelector('#hamburgerMenu img').setAttribute('src', iconSrc);
}