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

var reviewsNextButton = document.querySelector('.reviews__toggle-next');
var reviewsPrevButton = document.querySelector('.reviews__toggle-prev');
var firstReview = document.querySelector('.reviews__slide--first');
var secondReview = document.querySelector('.reviews__slide--second');
var thirdReview = document.querySelector('.reviews__slide--third');

var currentReview;

reviewsNextButton.addEventListener('click', function() {

  currentReview = firstReview.checked ? 0 : (secondReview.checked ? 1 : 2);

  currentReview = (currentReview + 1) % 3;

  console.log(currentReview);

  switch (currentReview) {
    case 0: {
      firstReview.checked = true;
      break;
    }
    case 1: {
      secondReview.checked = true;
      break;
    }
    case 2: {
      thirdReview.checked = true;
      break;
    }
  }
});

reviewsPrevButton.addEventListener('click', function() {

  currentReview = firstReview.checked ? 0 : (secondReview.checked ? 1 : 2);

  currentReview = ((currentReview - 1) + 3) % 3;

  console.log(currentReview);

  switch (currentReview) {
    case 0: {
      firstReview.checked = true;
      break;
    }
    case 1: {
      secondReview.checked = true;
      break;
    }
    case 2: {
      thirdReview.checked = true;
      break;
    }
  }
});


