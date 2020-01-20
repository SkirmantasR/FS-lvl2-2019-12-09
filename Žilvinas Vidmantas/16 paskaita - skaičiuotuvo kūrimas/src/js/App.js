export default class App {
  constructor(selector) {
    this.calculator = document.querySelector(selector);
    this.memoryLine = calculator.querySelector('.js-memory-line');
    this.resultLine = calculator.querySelector('.js-result-line');
    this.lastInput = 'number';
    this.memoryString = '';
    this.resultString = '0';
    this.numberRead = false;

    this.clear = this.clear.bind(this);
    this.back = this.back.bind(this);
    this.appendOperand = this.appendOperand.bind(this);
    this.appendOperation = this.appendOperation.bind(this);
    this.appendDot = this.appendDot.bind(this);
    this.calc = this.calc.bind(this);
    this.zeroRegex = RegExp('(0 | 0\.0?)');

    this.initEventListeners();
  }

  initEventListeners() {
    this.calculator.querySelectorAll('.js-operator').forEach(btn =>
      btn.addEventListener('click', this.appendOperation)
    );
    this.calculator.querySelectorAll('.js-number').forEach(btn =>
      btn.addEventListener('click', this.appendOperand)
    );
    this.calculator.querySelector('.js-clear').addEventListener('click', this.clear);
    this.calculator.querySelector('.js-back').addEventListener('click', this.back);
    this.calculator.querySelector('.js-dot').addEventListener('click', this.appendDot);
    this.calculator.querySelector('.js-calc').addEventListener('click', this.calc);
    this.render();
  }

  clear() {
    this.memoryString = '';
    this.resultString = '0';
    this.lastInput = 'number';
    this.numberRead = false;
    this.render();
  }

  back() {
    console.log(this.resultString);
    if (this.lastInput != 'operator') {
      this.resultString = this.resultString.slice(0, -1);
      this.render();
    }
  }

  appendOperand(e) {
    let value = e.target.tagName == 'SPAN' ? e.target.innerHTML : e.target.firstChild.innerHTML;
    if (this.resultString == '0' || this.lastInput == 'operator') {
      this.resultString = value;
      this.numberRead = false;
    }
    else this.resultString += value;
    this.lastInput = 'number';
    this.render();
  }

  appendOperation(e) {
    let operatorSign = e.target.tagName == 'SPAN' ? e.target.innerHTML : e.target.firstChild.innerHTML;
    let operator;
    switch (operatorSign) {
      case '×': operator = '*'; break;
      case '÷': operator = '/'; break;
      default: operator = operatorSign;
    }
    if (this.lastInput == 'number') {
      this.memoryString += ' ' + this.resultString + ' ' + operator;
      this.numberRead = true;
    } else if (this.lastInput == 'operator') {
      this.memoryString = this.memoryString.slice(0, -2) + ' ' + operator;
    } else {
      let value = this.resultString.slice(0, -1);
      this.resultString = value;
      this.memoryString = ' ' + this.resultString + ' ' + operator;
      this.numberRead = true;
    }
    this.lastInput = 'operator';
    this.render();
  }

  appendDot() {
    if (this.lastInput == 'number' && !this.resultString.includes('.')) {
      this.resultString += '.';
    } else if (this.lastInput == 'operand') {
      this.resultString = '0.';
    } else return;
    this.lastInput = 'dot';
    this.render();
  }

  calc() {
    this.resultString = this.memoryString + ' '+ this.resultString;
    console.log(this.resultString);
    console.log(/* Patikrinti regex*/);
    if (!this.resultString.includes('/ 0')) {
      this.resultString = eval(this.resultString);
      this.lastInput = 'number';
      this.numberRead = true;
    } else {
      this.resultString = 'Can\'t divide by zero';

    }
    this.memoryLine.value = '';
    this.memoryString = '';
    this.render();
  }

  render() {
    this.memoryLine.value = this.memoryString;
    this.resultLine.value = this.resultString;
  }
}