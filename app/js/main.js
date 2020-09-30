$(function() {

});

const provideItems = document.querySelectorAll('.provide__item');

provideItems.forEach(item => {
    item.addEventListener('click', () => {
        provideItems.forEach(item => {
            item.style.borderColor = 'transparent';
        });
        item.style.borderColor = '#9d9d9d';
    });
});