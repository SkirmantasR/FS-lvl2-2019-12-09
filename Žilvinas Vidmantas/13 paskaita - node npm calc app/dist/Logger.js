class Logger{
    constructor(input){
        this.input = input;
    }
    logErrors(msgArr) {
        this.input.innerHTML = '<h3 class="text-danger">Error:</h3>';
        msgArr.forEach(msg => {
            this.input.innerHTML += `<div class="text-danger">${msg}</div>`;
        });
    }
    
    logAnswer(ans) {
        this.input.innerHTML = `<h3 class="text-success">Answer is: ${ans}</h3>`;
    }
}