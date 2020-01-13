class Validation{
    constructor(inputName, input){
        this.name = inputName;
        this.input = input;
        this.errors = [];
    }
    const valueContainer = document.querySelector('.js-operand');
    console.log(valueContainer);
 

    isNumber(value1,value2)
  {
    if(isNaN(value1) == false){
        return console.log('yes');
    } else {
        return console.log('fuck no');
    }
}

    // isNumber();
//     length(min, max){
//        //....
//         return this;
//     }

//     notEmpty(){
//       // ...
//       return this;
//     }

//     getErrors(){
//       // ...
//     }
}