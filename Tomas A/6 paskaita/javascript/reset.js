// Nuimame animacjų blokavimą puslapyje
document.addEventListener("DOMContentLoaded", (event)=>{
    console.log(event);
    document.body.classList.remove('js-prevent-transition');
});