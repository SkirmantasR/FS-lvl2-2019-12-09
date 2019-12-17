// Elements
const cards = document.querySelectorAll('.card');
const scrollTriggers = [
    {
        func: showBlogPosts,
        minOffset: getOffsetTop(cards[2]),
        triggerEl: cards[2]
    }
]


// Functions
function setVisibleMultiple(items, apearanceType = 'none') {
    let aprearanceSpeed;
    switch (apearanceType) {
        case 'linear': aprearanceSpeed = (x) => { return x * 300 }; break;
        case 'exponential': aprearanceSpeed = (x) => { return x ** 2 * 100 }; break;
        case 'mix': aprearanceSpeed = (x) => { return x ** 2 * 50 + x * 150 }; break;
        default: aprearanceSpeed = () => { return 0 }
    }
    items.forEach((item, i) => {
        setTimeout(() => {
            item.classList.remove('hide');
        }, aprearanceSpeed(i));
    });
}


function showBlogPosts() {
    setVisibleMultiple(cards, 'mix');
}

// Window event handle functions
function handlePageScroll() {
    let offsetFromTop = window.scrollY;
    scrollTriggers.forEach(triggerObject => {
        if (offsetFromTop > triggerObject.minOffset ) {
            triggerObject.func();
        }
    });
}

function handleViewportChange() {
    scrollTriggers.forEach(scrollTriggersObject => {
        scrollTriggersObject.minOffset = getOffsetTop(scrollTriggersObject.triggerEl);
    })
}

// Helper functions
function getOffsetTop(elem) {
    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let offsetTop = 0;
    do {
        if (!isNaN(elem.offsetTop)) {
            offsetTop += elem.offsetTop;
        }
    } while (elem = elem.offsetParent);
    return offsetTop  - viewportHeight;
}


// Event Listeners
window.addEventListener('scroll', handlePageScroll)
window.addEventListener('resize', handleViewportChange);

// Initial commands
handleViewportChange()
