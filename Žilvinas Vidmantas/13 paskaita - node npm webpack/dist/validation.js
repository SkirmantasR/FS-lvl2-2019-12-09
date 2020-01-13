class Validation {
  constructor(inputName, input) {
    this.name = inputName;
    this.input = input
    this.errors = [];
  }
  isNumber() {
    if (isNaN(this.input)) this.errors.push(`${this.name}: value is not numerical.`);
    return this;
  }
  length(min, max) {
    if (this.input.length < min || this.input.length > max)
      this.errors.push(`${this.name}: must be between ${min} and ${max}.`);
    return this;
  }
  notEmpty() {
    if (this.input == '') this.errors.push(`${this.name}: must not be empty.`);
      return this;
  }
  getErrors() {
    return this.errors;
  }
}