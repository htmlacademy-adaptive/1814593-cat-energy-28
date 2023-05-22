// Меню бургер

let nav = document.querySelector('.nav');
let navToggle = document.querySelector('.burger');

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

// Слайдер с котами

function initSlider() {
  const container = document.querySelector('.slider');
  document.querySelector('.slider__range')?.addEventListener('input', (e) => {
    container.style.setProperty('--persent', `${e.target.value}%`);
  });
}

initSlider();
