// Elements
const cards = document.querySelectorAll('.card');
const animateTriggers = [];

// Functions
function animateMultipleElements(items, apearanceType) {
    let aprearanceSpeed;
    switch (apearanceType) {
        case 'linear': aprearanceSpeed = x => x * 300; break;
        case 'exponential': aprearanceSpeed = x => x ** 2 * 100; break;
        case 'mix': aprearanceSpeed = x => 50 * x ** 2 + x * 150; break;
        default: aprearanceSpeed = () => 0
    }
    items.forEach((item, i) => {
        setTimeout(() => {
            item.classList.remove('hide');
        }, aprearanceSpeed(i));
    });
}

function handlePageScroll() {
    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let top = window.scrollY;

    animateTriggers.forEach(anTrig => {
        if (top > anTrig.getOffset() - viewportHeight && top < anTrig.getOffset()) {
            anTrig.animate();
        } else if (anTrig.toggleAnimation) anTrig.hide();
    });
}

function handleViewportChange() {
    animateTriggers.forEach(animateTriggersObject => animateTriggersObject.getOffset());
}

function getOffsetTop(elem) {
    let offsetTop = 0;
    do {
        if (!isNaN(elem.offsetTop)) offsetTop += elem.offsetTop;
    } while (elem = elem.offsetParent);
    return offsetTop;
}

/**
 * Aprašas 3000
 * 
 * @param {Node} triggerElement - elementas pagal kurio poziciją bus pradedama animuoti
 * @param {Array} elementsToAnimate - elementai kurie bus animuojami
 * @param {String} animationType - linear, exponential, mix
 * @param {Boolean} toggle - ar per'animuoti elementus
 */
function animateOnTrigger(triggerElement, elementsToAnimate, animationType, toggle = false) {
    animateTriggers.push({
        animate: () => animateMultipleElements(elementsToAnimate, animationType),
        getOffset: () => getOffsetTop(triggerElement),
        hide: () => elementsToAnimate.forEach(el => el.classList.add('hide')),
        toggleAnimation: toggle
    });
}

// Event Listeners
window.addEventListener('scroll', handlePageScroll);
window.addEventListener('resize', handleViewportChange);

// Initial commands
animateOnTrigger(cards[2], cards, 'linear', true);
handleViewportChange();
handlePageScroll();
