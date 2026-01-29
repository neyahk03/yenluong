
const menuButton = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

if (menuButton && menu) {
    menuButton.setAttribute('aria-expanded', String(menu.classList.contains('open')));

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        menuButton.setAttribute('aria-expanded', String(!isExpanded));
        menuButton.classList.toggle('change');
        menu.classList.toggle('open');
    });
}
