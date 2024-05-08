const hamburgerButton = document.querySelector('#menuButton');
const links = document.querySelector('.links');

hamburgerButton.addEventListener('click', ()=> {
    links.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});