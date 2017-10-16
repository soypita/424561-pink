var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.add('main-nav__toggle--close');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navToggle.classList.remove('main-nav__toggle--close');
  } else {
    navMain.classList.add('main-nav--closed');
    navToggle.classList.add('main-nav__toggle--close');
  }
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
