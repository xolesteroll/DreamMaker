$(function () {
});

const provideItems = document.querySelectorAll('.provide__item'),
    header = document.querySelector('header'),
    questions = document.querySelectorAll('.questions__list-item'),
    answers = document.querySelectorAll('.answer');

provideItems.forEach(item => {
    item.addEventListener('click', () => {
        provideItems.forEach(item => {
            item.style.borderColor = 'transparent';
        });
        item.style.borderColor = '#9d9d9d';
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 50) {
        header.style.cssText = 'background-color: rgba(196,196,196,0.9);';
    } else {
        header.style.cssText = 'background-color: rgba(196,196,196,0.1);';
    }
});

function showDropdown(elem) {
    elem.classList.remove('hide');
    elem.classList.add('show');
}


questions.forEach(item => {
    const child = item.lastElementChild;
    const nextLi = item.nextElementSibling;
    item.addEventListener('click', () => {
        if (child.classList.contains('answer')) {
            console.log(1);
            child.classList.toggle('hide');
            child.classList.toggle('show'); 
            nextLi.classList.toggle('mt__li');
            item.classList.toggle('overflow');
        }
    });



});