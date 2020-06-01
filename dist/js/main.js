// Select DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set the Initial State of the DOM element
let showMenu = false;
const showClassName = 'show';
const closeClassName = 'close';

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add(closeClassName);
    menu.classList.add(showClassName);
    menuBranding.classList.add(showClassName);
    menuNav.classList.add(showClassName);
    navItems.forEach((navItem) => {
      navItem.classList.add(showClassName);
    });
    document.getElementById('bar').style.display = 'none';
    document.getElementById('cross').style.display = 'inline';
    showMenu = true;

    // pop over 
    togglePopOver();
  } else {
    menuBtn.classList.remove(closeClassName);
    menu.classList.remove(showClassName);
    menuBranding.classList.remove(showClassName);
    menuNav.classList.remove(showClassName);
    navItems.forEach((navItem) => {
      navItem.classList.remove(showClassName);
    });
    document.getElementById('bar').style.display = 'inline';
    document.getElementById('cross').style.display = 'none';
    showMenu = false;
  }
}




// Pop over
const colorPalette = document.querySelector('.color-palette');
const popOver = document.querySelector('.pop-over');
popOver.classList.add(closeClassName);
let showPopOver = false;
colorPalette.addEventListener('click', togglePopOver);


function togglePopOver() {
  if (!showPopOver) {
    popOver.classList.add(showClassName);
    popOver.classList.remove(closeClassName);
    showPopOver = true;
  } else {
    popOver.classList.remove(showClassName);
    popOver.classList.add(closeClassName);
    showPopOver = false;
  }
}



// Color Palette
