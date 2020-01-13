class Validation{
    constructor (inputName, input){
        this.name = inputName;
        this.input = input;
        this.errors = {};
     

    }

    isNumber = () => {
        if (this.input.isNaN()) {
            this.errors.push(`${input} is not a number`)
          }
        else{
            return this;
        }
    }

    lenght = () => {
        if (this.input.lenght == 0) {
            this.errors.push(`${input} must be no more than 0 chars.`)
        }
        else{
        return this;
    }
}

    notEmpty(){
        if(this.input.lenght == ""){
        this.errors.push(`Input must not be empty.`)
        }
        else{
        return this;
    }
}

    getErrors = () => {
        for (let input in this.errors) {
          if (this.errors[input].length > 0) return true;
        }
        return false;
      }

}

