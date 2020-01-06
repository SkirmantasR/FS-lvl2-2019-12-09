// Elements

const animateTriggers = []; // Niekada nereikia naudoti

// Functions
function animateMultipleElements(items, className, add, apearanceType, delay) {
    let aprearanceSpeed;
    switch (apearanceType) {
        case 'linear': aprearanceSpeed = x => x * 300; break;
        case 'exponential': aprearanceSpeed = x => x ** 2 * 100; break;
        case 'slow exponential': aprearanceSpeed = x => 500 * x ** 2; break;
        case 'mix': aprearanceSpeed = x => 50 * x ** 2 + x * 150; break;
        default: aprearanceSpeed = () => 0
    }
    items.forEach((item, i) => {
        setTimeout(() => {
            // !!!!!!!!!!!!!!!!!!!!!!!!! - besrolinant jau reikejo hide'int bet vis tiek parodomas
            if (add) item.classList.add(className);
            else item.classList.remove(className);
        }, delay + aprearanceSpeed(i));
    });
}

function handlePageScroll() {
    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let top = window.scrollY;

    animateTriggers.forEach(anTrig => {
        let elementTopInViewport = top >= anTrig.getOffset() - viewportHeight;
        let elementBotInViewport = top <= anTrig.getOffset() + anTrig.elHeight();
        if (elementTopInViewport && elementBotInViewport) anTrig.animate();
        else if (anTrig.toggleAnimation) anTrig.hide();
    });
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

function animateOnTrigger(
    triggerElement,
    elementsToAnimate,
    className,
    add = true,
    animationType = 'none',
    toggle = false,
    delay = 0) {
    animateTriggers.push({
        animate: () => animateMultipleElements(elementsToAnimate, className, add, animationType, delay),
        getOffset: () => getOffsetTop(triggerElement),
        hide: () => elementsToAnimate.forEach((el) => {
            if (add) el.classList.remove(className);
            else el.classList.add(className);
        }),
        elHeight: () => triggerElement.offsetHeight,
        toggleAnimation: toggle
    });
}


// Event Listeners
window.addEventListener('scroll', handlePageScroll);

// Initial commands
setTimeout(() => {
    handlePageScroll();
}, 50);
