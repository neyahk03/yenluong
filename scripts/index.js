

const menuButton = document.querySelector('.btn_menu');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    console.log('working');
    menuButton.classList.toggle('change');
    menu.classList.toggle('open');
})





