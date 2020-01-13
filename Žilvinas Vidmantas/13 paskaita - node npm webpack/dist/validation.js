class Validation{
    constructor(inputName, input){
        this.name = inputName;
        this.input = input
        this.errors = [];
    }

    isNumber(){
      // ...
        return this;
    }

    length(min, max){
      // ...
        return this;
    }

    notEmpty(){
      // ...
      return this;
    }

    getErrors(){
      // ...
    }
}