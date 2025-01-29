const menuBurger = document.getElementById('menuBurger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

menuBurger.addEventListener('click', () => {
    menu.classList.add('open');
    menuBurger.style.display = 'none'; // Hide the burger button
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    menuBurger.style.display = 'block'; // Show the burger button
});