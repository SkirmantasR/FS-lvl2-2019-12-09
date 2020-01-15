const input1 = document.querySelector('.js-operand-1');
const input2 = document.querySelector('.js-operand-2');
const btn = document.querySelector('.btn.btn-primary');
const logContainer = document.querySelector('.js-log');
const jsOperator = document.querySelector('.js-operator');
const logger = new Logger(logContainer);
btn.addEventListener('click', function () {
  let a = input1.value, b = input2.value;
  let validate1 = new Validation('Input one', a)
    .isNumber()
    .length(1, 16)
    .notEmpty();
  let validate2 = new Validation('Input two', b)
    .isNumber()
    .length(1, 16)
    .notEmpty();
  let errors = validate1.getErrors().concat(validate2.getErrors());
  if (errors.length > 0) logger.logErrors(errors);
  else logger.logAnswer(window[jsOperator.value](Number(a), Number(b)))
})