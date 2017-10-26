var navMain = document.querySelector('.main-nav');
var navToogleClose = document.querySelector('.main-nav__toggle');
var navToggleCross = document.querySelector('.main-nav__toggle').querySelector('.main-nav__toggle-logo:nth-of-type(1)');
var navToggleBurger = document.querySelector('.main-nav__toggle').querySelector('.main-nav__toggle-logo:nth-of-type(2)');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
navToggleCross.classList.remove('main-nav__toggle--open');
navToggleBurger.classList.add('main-nav__toggle--open');

navToogleClose.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggleBurger.classList.remove('main-nav__toggle--open');
    navToggleCross.classList.add('main-nav__toggle--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggleBurger.classList.add('main-nav__toggle--open');
    navToggleCross.classList.remove('main-nav__toggle--open');
  }
});

var submitForm = document.querySelector('.button--competition-form');
var requerdFields = document.querySelectorAll('.competition-form__input--require');
var succsessModal = document.querySelector('.modal--request');
var errorModal = document.querySelector('.modal--error');

submitForm.addEventListener('click', function (evt) {
  evt.preventDefault();
  var isValid = true;
  for (var i = 0; i < requerdFields.length; i++) {
    var input = requerdFields[i];
    if (!input.value) {
      input.classList.add('competition-form__input--error')
      isValid = false;
      break;
    }
  }

  if (isValid) {
    succsessModal.classList.add('modal--open');
  } else {
    errorModal.classList.add('modal--open');
  }
});

var modalErrorButton = document.querySelector('.button--modal-error');
var modalSuccsessButton = document.querySelector('.button--modal-request');

modalErrorButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  errorModal.classList.remove('modal--open');
});

modalSuccsessButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  succsessModal.classList.remove('modal--open');
});
