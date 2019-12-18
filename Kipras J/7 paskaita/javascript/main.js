const cards = document.querySelectorAll('.card');
const home = document.querySelector('#home');
const homeBrand = document.querySelector('.home__brand');
const homeSlogan = document.querySelector('.home__slogan');
const homeButtons = document.querySelectorAll('.home__btn-container>.btn');
const wrapperContainer = document.querySelector('.wrapper');
const members = document.querySelectorAll('.team_member');

animateOnTrigger(cards[2], cards, 'show');
animateOnTrigger(home, [home], 'hide', false, 'mix', true);
animateOnTrigger(
    home,
    [homeBrand, homeSlogan], 
    'hide', 
    false,
    'slow exponential',
    true,
    300);
animateOnTrigger(home, homeButtons, 'mix', true, 600);

animateOnTrigger(wrapperContainer, members, 'none');