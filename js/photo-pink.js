var navMain = document.querySelector('.main-nav');
var navToogleClose = document.querySelector('.main-nav__toggle');
var navToggleCross = document.querySelector('.main-nav__toggle').querySelector('.main-nav__toggle-logo:nth-of-type(1)');
var navToggleBurger = document.querySelector('.main-nav__toggle').querySelector('.main-nav__toggle-logo:nth-of-type(2)');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');
navToggleCross.classList.remove('main-nav__toggle--open');
navToggleBurger.classList.add('main-nav__toggle--open');

navToogleClose.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggleBurger.classList.remove('main-nav__toggle--open');
    navToggleCross.classList.add('main-nav__toggle--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggleBurger.classList.add('main-nav__toggle--open');
    navToggleCross.classList.remove('main-nav__toggle--open');  }
});



var firstFilter = document.querySelector('.photo-upload__filter:nth-of-type(1)');
var secondFilter = document.querySelector('.photo-upload__filter:nth-of-type(2)');
var thirdFilter = document.querySelector('.photo-upload__filter:nth-of-type(3)');

var firstSliderBlock = document.querySelector('.photo-upload__manipulator:nth-of-type(1)');
var secondSliderBlock = document.querySelector('.photo-upload__manipulator:nth-of-type(2)');
var thirdSliderBlock = document.querySelector('.photo-upload__manipulator:nth-of-type(3)');

var firstManipulator = firstSliderBlock.querySelector('.photo-upload__tumble');
var secondManipulator = secondSliderBlock.querySelector('.photo-upload__tumble');
var thirdManipulator = thirdSliderBlock.querySelector('.photo-upload__tumble');

var currentFilter = 0;

firstFilter.addEventListener('click', function() {
  switch (currentFilter) {
    case 1: {
      secondFilter.classList.remove('photo-upload__filter--current');
      secondManipulator.classList.remove('photo-upload__tumble--active');
      secondSliderBlock.classList.remove('photo-upload__manipulator--current');
      break;
    }
    case 2: {
      thirdFilter.classList.remove('photo-upload__filter--current');
      thirdManipulator.classList.remove('photo-upload__tumble--active');
      thirdSliderBlock.classList.remove('photo-upload__manipulator--current');
      break;
    }
  }
  firstFilter.classList.add('photo-upload__filter--current');
  firstManipulator.classList.add('photo-upload__tumble--active');
  firstSliderBlock.classList.add('photo-upload__manipulator--current');

  currentFilter = 0;
});

secondFilter.addEventListener('click', function() {
  switch (currentFilter) {
    case 0: {
      firstFilter.classList.remove('photo-upload__filter--current');
      firstManipulator.classList.remove('photo-upload__tumble--active');
      firstSliderBlock.classList.remove('photo-upload__manipulator--current');
      break;
    }
    case 2: {
      thirdFilter.classList.remove('photo-upload__filter--current');
      thirdManipulator.classList.remove('photo-upload__tumble--active');
      thirdSliderBlock.classList.remove('photo-upload__manipulator--current');
      break;
    }
  }
  secondFilter.classList.add('photo-upload__filter--current');
  secondManipulator.classList.add('photo-upload__tumble--active');
  secondSliderBlock.classList.add('photo-upload__manipulator--current');
  currentFilter = 1;
});

thirdFilter.addEventListener('click', function() {
  switch (currentFilter) {
    case 0: {
      firstFilter.classList.remove('photo-upload__filter--current');
      firstManipulator.classList.remove('photo-upload__tumble--active');
      firstSliderBlock.classList.remove('photo-upload__manipulator--current');
      break;
    }
    case 1: {
      secondFilter.classList.remove('photo-upload__filter--current');
      secondManipulator.classList.remove('photo-upload__tumble--active');
      secondSliderBlock.classList.remove('photo-upload__manipulator--current');

      break;
    }
  }
  thirdFilter.classList.add('photo-upload__filter--current');
  thirdManipulator.classList.add('photo-upload__tumble--active');
  thirdSliderBlock.classList.add('photo-upload__manipulator--current');
  currentFilter = 2;
});
