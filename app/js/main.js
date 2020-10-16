

const provideItems = document.querySelectorAll('.provide__item'),
    header = document.querySelector('header'),
    questions = document.querySelectorAll('.questions__list-item'),
    answers = document.querySelectorAll('.answer'),
    modal = document.querySelector('.modal'),
    modalTrigger = document.querySelectorAll('[data-open]'),
    modalCloseBtn = document.querySelector('[data-close]'),
    girlImg = document.querySelector('.best__girl-img'),
    peopleImg = document.querySelector('.people__img'),
    manImg = document.querySelector('.questions__man-img'),
    loginForm = document.querySelector('.login__form');

function fadeImg(img) {
    img.classList.remove('fadeOut');
    img.classList.add('fadeIn');
}
function fadeOutElem(elem) {
    elem.style.cssText = "transition: all 1.5s";
    elem.classList.add('fadeOut');
} 
function slideOutElem(elem, side) {
    elem.style.cssText = "transition: all 1s";
    elem.classList.add(side);
}
function slideInElem(elem, side) {
    elem.classList.remove(side);
    elem.classList.add("slideIn");
}

slideOutElem(girlImg, "slideout__left");
slideOutElem(peopleImg, "slideout__right");
slideOutElem(manImg, "slideout__right");
fadeOutElem(loginForm);

window.addEventListener('scroll', () => {
    if (girlImg.getBoundingClientRect().top <= 250 && girlImg.getBoundingClientRect().top >= -250) {
        slideInElem(girlImg, "slideout__left");
    }
    if (peopleImg.getBoundingClientRect().top <= 400 && peopleImg.getBoundingClientRect().top >= -400) {
        slideInElem(peopleImg, "slideout__right");
    }
    if (manImg.getBoundingClientRect().top <= 300 && manImg.getBoundingClientRect().top >= -300) {
        slideInElem(manImg, "slideout__right");
    }
    if (loginForm.getBoundingClientRect().top <= 500 && loginForm.getBoundingClientRect().top >= -400) {
        fadeImg(loginForm);
    }
});


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
function showModal(window) {
    window.classList.remove('none');
    window.classList.add('block');
    document.body.style.overflow = 'hidden';
}
function closeMOdal(window) {
    window.classList.remove('block');
    window.classList.add('none');
    document.body.style.overflow = '';
}

function ModalCloseOpen() {
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showModal(modal);

        });
    });

    modal.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target == modalCloseBtn || target == modal) {
            closeMOdal(modal);

        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('block')) {
            closeMOdal(modal);
        }
    });


}

ModalCloseOpen();



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
            if (item == item.parentElement.lastElementChild && questions[n + 1]) {
                questions[n + 1].classList.remove('mt__li');
            }
        } else {
            hideDropdown(answers[n]);
            item.classList.remove('overflow');
            if (questions[n + 1]) {
                questions[n + 1].classList.remove('mt__li');
            } else {
                questions[n].style.marginBottom = '0';
            }

        }
    });
});

