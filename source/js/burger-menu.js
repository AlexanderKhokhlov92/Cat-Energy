const burgerButton = document.querySelector('.navigation_burger-button');
const navigationList = document.querySelector('.navigation_list');

burgerButton.addEventListener('click', (event) => {
  burgerButton.classList.toggle('button-active');
  navigationList.classList.toggle('navigation_list-open');
});
