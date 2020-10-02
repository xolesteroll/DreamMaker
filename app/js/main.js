$(function () {
});

const provideItems = document.querySelectorAll('.provide__item'),
    header = document.querySelector('header'),
    questions = document.querySelectorAll('.questions__list-item'),
    answers = document.querySelectorAll('.answer');

function showDropdown(elem) {
    elem.classList.remove('hide');
    elem.classList.add('show');
    elem.parentElement.classList.add('active');
}
function hideDropdown(elem) {
    elem.classList.remove('show');
    elem.classList.add('hide');
    elem.parentElement.classList.remove('active');
}

provideItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        provideItems.forEach(item => {
            item.style.borderColor = 'transparent';
        });
        item.style.borderColor = '#9d9d9d';
    });
    item.addEventListener('mouseleave', () => {
        provideItems.forEach(item => {
            item.style.borderColor = 'transparent';
        });
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 50) {
        header.style.cssText = 'background-color: rgba(196,196,196,0.9);';
    } else {
        header.style.cssText = 'background-color: rgba(196,196,196,0.1);';
    }
});


questions.forEach((item, n) => {

    item.addEventListener('click', () => {
        if (answers[n].classList.contains('hide')) {
            answers.forEach(ans => {
                hideDropdown(ans);
                questions.forEach(q => {
                    q.classList.remove('mt__li');
                    q.classList.remove('overflow');
                });
            });
            showDropdown(answers[n]);
            item.classList.add('overflow');
            if (questions[n + 1]) {
                questions[n + 1].classList.add('mt__li');
            } else {
                questions[n].style.marginBottom = '150px';
            }
            if (n === 6) {
                questions[n + 1].classList.remove('mt__li');
            }
        } else {
            hideDropdown(answers[n]);
            item.classList.remove('overflow');
            if(questions[n + 1]){
                questions[n + 1].classList.remove('mt__li');
            } else {
                questions[n].style.marginBottom = '0';
            }
            
        }
    });
});