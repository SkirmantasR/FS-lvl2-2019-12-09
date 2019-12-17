// Elements
const srollTriggers = [
    {
        func: showBlogPosts, 
        minOffset: 1166
    }
]


const cards = document.querySelectorAll('.card');


// Functions
function setVisibleMultiple(items, appearanceType= 'none' ){
    let appearanceSpeed;
    switch(appearanceType){
        case 'linear' : appearanceSpeed = (x) => { return x * 300 }; break;
        case 'exponential' : appearanceSpeed = (x) => { return x ** 2 * 100 }; break;
        case 'mix' :appearanceSpeed = (x) => { return x ** 2 * 50 + x * 150 }; break;
        default: appearanceSpeed = () => { return 0 }
    }
items.forEach((item, i) => {
    setTimeout(() => {
        item.classList.remove('hide');
    }, appearanceSpeed(i));
});
}

function handlePageScroll(event) {
    let offsetFromTop = window.scrollY;
    console.log(offsetFromTop);
    scrollTriggers.forEach(triggerObject => {
        if(triggerObject.minOffset < offsetFromTop){
            triggerObject.func();
        }
    });
}


function handeViewPortChange(){
scrollTriggers = scrollTriggers.map( scrollTriggers)
}

//Help Function

function getOffsetFromTop(element){
    element: 
    return 1000;
}

//Event Listeners
window.addEventListener('scroll', handlePageScroll)
window.addEventListener('resize', function (event){

}



//Innitial comands

setVisibleMultiple(cards, 'mix');