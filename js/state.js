//Keep track of hamburger menu
var isMenuOpen = false;


function toggleMenu() {
  const navbarLinks = document.getElementById('navbarLinks');
  navbarLinks.classList.toggle('show');
  //if menu open, then close, other way around...
  document.querySelector('.navbar-container').classList.toggle('nav-open');
  isMenuOpen = !isMenuOpen;
  //CHanges icon image
  var iconSrc = isMenuOpen ? '/Assets/icons/close-hamburger.svg' : '/Assets/icons/hamburger.svg';
  document.querySelector('#hamburgerMenu img').setAttribute('src', iconSrc);
}



function toggleCart() {
  //Toggles the overlay black background
  document.querySelector('.overlay').classList.toggle('open');
  //toggles the actual side cart
  document.querySelector('.cart').classList.toggle('open');
}


/*Checks for which recipe to load*/
function linkOpen(event){
  //Only targets the child element, so rather than selecting the first element with am id
  const parent = event.currentTarget;
  const h2element = parent.querySelector('h2');
  const recipeName = h2element.textContent;
  console.log(recipeName);  

    //Store/overwrite the "active" recipe in the local storage to update the recipe
    if (recipeName) {
        localStorage.setItem('recipeName', recipeName);
    }
    
}