
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  nav.classList.toggle('menu--open');
  console.log(nav.classList);
}

// Start Here: Create a reference to the ".menu" class
const nav = document.querySelector('.menu');

// // create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

// // Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);


