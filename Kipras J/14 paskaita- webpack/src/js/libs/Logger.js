export default class Logger {
    constructor(container) {
        this.container = container;
    }
    logErrors(msgArr) {
        this.container.innerHTML = '<h3 class="text-danger">Error:</h3>';
        msgArr.forEach(msg => {
            this.container.innerHTML += `<div class="text-danger">${msg}</div>`;
        });
    }

    logAnswer(ans) {
        this.container.innerHTML = `<h3 class="text-success">Answer is: ${ans}</h3>`;
    }
}