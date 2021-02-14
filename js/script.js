const headerBurger = document.querySelector('.header__burger')
const headerItemLink = document.querySelectorAll('.header__item-link')
const body = document.querySelector('body')


headerBurger.addEventListener ('click', () => {
    body.classList.toggle('active')
});
headerItemLink.forEach((el) => {
    el.addEventListener('click', () => {
        body.classList.toggle('active')
    })
});

