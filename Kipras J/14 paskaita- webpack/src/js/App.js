import Logger from './libs/Logger';
import Validation from './libs/Validation';
import { add, subtract, multiply, divide } from './utils/math';

class App {
  constructor() {
    const logContainer = document.querySelector('.js-log');
    this.add = add;
    this.subtract = subtract;
    this.multiply = multiply;
    this.divide = divide;
    this.input1 = document.querySelector('.js-operand-1');
    this.input2 = document.querySelector('.js-operand-2');
    this.btn = document.querySelector('.btn.btn-primary');
    this.jsOperator = document.querySelector('.js-operator');
    this.logger = new Logger(logContainer);
  }

  start () {
    this.btn.addEventListener('click', () => {
      let a = this.input1.value, b = this.input2.value;
      let validate1 = new Validation('Input one', a)
        .isNumber()
        .length(1, 16)
        .notEmpty();
      let validate2 = new Validation('Input two', b)
        .isNumber()
        .length(1, 16)
        .notEmpty();
      let errors = validate1.getErrors().concat(validate2.getErrors());
      if (errors.length > 0) this.logger.logErrors(errors);
      else this.logger.logAnswer(this[this.jsOperator.value](Number(a), Number(b)))
    });
  }
}

export default App;