const open = document.querySelector('.open');
const navbarSections = document.querySelector('.navbar');
const close = document.querySelector('.close');

function showDropdown() {
  navbarSections.style.top = '0';
}

function hideDropdown() {
  navbarSections.style.top = '-100%';
}

open.addEventListener('click', showDropdown);

close.addEventListener('click', hideDropdown);