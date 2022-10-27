const burgerButton = document.querySelector('.burger__button');
const navigation = document.querySelector('.banner__navbar');

burgerButton.addEventListener("click", toggleNav);

function toggleNav() {
  burgerButton.classList.toggle('active');
  navigation.classList.toggle('active')
}