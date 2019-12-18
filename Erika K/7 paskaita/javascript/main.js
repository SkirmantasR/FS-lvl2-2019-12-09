const cards = document.querySelectorAll('.card');
const home = document.querySelector('#home');
const homeBrand = document.querySelector('.home__brand');
const homeSlogan = document.querySelector('.home__slogan');
const homeButtons = document.querySelectorAll('.home__btn-container>.btn');

animateOnTrigger(cards[2], cards, 'linear', true);
animateOnTrigger(home, [home], 'mix', true);
animateOnTrigger(
    home,
    [homeBrand, homeSlogan],
    'slow exponential',
    true,
    300);
animateOnTrigger(home, homeButtons, 'mix', true, 1000);