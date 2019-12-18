const cards = document.querySelectorAll('.card');
const home = document.querySelector('#home');
const homeBrand = document.querySelector('.home__brand');
const homeSlogan = document.querySelector('.home__slogan');
const homeButtons = document.querySelectorAll('.home__btn-container>.btn');
const employeeContainer = document.querySelector('.contacts__container');
const employees = document.querySelectorAll('.employee');

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
animateOnTrigger(home, homeButtons, 'hide', false, 'mix', true, 1200);
animateOnTrigger(employeeContainer, employees, 'hide', false, 'none');