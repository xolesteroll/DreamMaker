$(function() {

});

const provideItems = document.querySelectorAll('.provide__item'),
    header = document.querySelector('header')

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