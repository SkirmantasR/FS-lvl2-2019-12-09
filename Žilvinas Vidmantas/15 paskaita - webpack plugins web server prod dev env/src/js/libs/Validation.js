class Validation {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.errors = [];
  }
  
  isNumber() {
    if (isNaN(this.value)) this.errors.push(`${this.name}: value is not numerical.`);
    return this;
  }

  length(min, max) {
    if (this.value.length < min || this.value.length > max)
      this.errors.push(`${this.name}: must be between ${min} and ${max}.`);
    return this;
  }

  notEmpty() {
    if (this.value == '') this.errors.push(`${this.name}: must not be empty.`);
    return this;
  }

  getErrors() {
    return this.errors;
  }
}

export default Validation;