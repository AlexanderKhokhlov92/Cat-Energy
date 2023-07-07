const leftCat = document.querySelector('.slide_wrapper--left');
const rightCat = document.querySelector('.slide_wrapper--right');
const sliderInput = document.querySelector('.slider_input-desktop');
let rightValue;
let leftValue = 50;
if (window.innerWidth < 730) {
  leftValue = 0;
  leftCat.style.width = '100%';
  rightCat.style.width = '100%';
}

sliderInput.value = leftValue;

sliderInput.addEventListener('input', function () {
  leftValue = sliderInput.value;
  rightValue = 100 - leftValue;
  sliderFunction(rightValue, leftValue);
});

function sliderFunction(rightValue, leftValue) {
  console.log('rightValue:', rightValue);
  console.log('leftValue:', leftValue);

  leftCat.style.width = `${leftValue}%`;
  rightCat.style.width = `${rightValue}%`;
}

// Мобильная версия
const catImageLeft = document.querySelector('.left-cat');
const catImageRight = document.querySelector('.right-cat');

const inputMobile = document.querySelector('.slide_input-mobile');
let mobileValue = 1;

console.log(inputMobile);
inputMobile.value = mobileValue;

inputMobile.addEventListener('input', function () {
  mobileValue = inputMobile.value;
  console.log(mobileValue);

  mobileFunction(mobileValue);
});

function mobileFunction(mobileValue) {
  if (mobileValue == 1) {
    catImageLeft.style.opacity = '1';
    catImageRight.style.opacity = '0';
  } else {
    catImageLeft.style.opacity = '0';
    catImageRight.style.opacity = '1';
  }
}
window.addEventListener('resize', function () {
  if (window.innerWidth > 730) {
    catImageLeft.style.opacity = '1';
    catImageRight.style.opacity = '1';
  } else {
    if (mobileValue == 1) {
      catImageLeft.style.opacity = '1';
      catImageRight.style.opacity = '0';
    } else {
      catImageLeft.style.opacity = '0';
      catImageRight.style.opacity = '1';
    }
  }
});
// Кнопки было и стало, для мобильной версии

const beforeBtnMobile = document.querySelector('.js-label-m1');
const afterBtnMobile = document.querySelector('.js-label-m2');

beforeBtnMobile.addEventListener('click', (e) => {
  inputMobile.value = 1;
  catImageLeft.style.opacity = '1';
  catImageRight.style.opacity = '0';
});
afterBtnMobile.addEventListener('click', (e) => {
  inputMobile.value = 2;
  catImageLeft.style.opacity = '0';
  catImageRight.style.opacity = '1';
});

const beforeBtn = document.querySelector('.js-label-d1');
const afterBtn = document.querySelector('.js-label-d2');

beforeBtn.addEventListener('click', (e) => {
  leftValue = 0;
  sliderInput.value = leftValue;
  rightCat.style.width = `${100 - leftValue}%`;
  leftCat.style.width = `${leftValue}%`;
});

afterBtn.addEventListener('click', (e) => {
  leftValue = 100;
  sliderInput.value = leftValue;
  rightCat.style.width = `${100 - leftValue}%`;
  leftCat.style.width = `${leftValue}%`;
});
