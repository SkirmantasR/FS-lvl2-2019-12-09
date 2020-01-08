class Validation {
    constructor(data) {
      this.data = data;
      this.errors = {};
      for (const key in data) {
        this.errors[key] = [];
      }
    }
  
    minLength = (key, len) => {
      if (this.data[key].length < len) {
        this.errors[key].push(`${key} must be at least ${len} chars.`)
      }
      return this;
    }
  
    maxLength = (key, len) => {
      if (this.data[key].length > len) {
        this.errors[key].push(`${key} must be no more than ${len} chars.`)
      }
      return this;
    }
  
    uniqueLogin = () =>{
      const users = JSON.parse(localStorage.getItem('users'));
      const logins = users.map(user => user.login);
      let unique = !logins.includes(this.data.login);
      if(!unique) this.errors.push('Login in son unique');
      return this;
    }
  
    equalPasswords = () =>{
      if(this.data.password !== this.data['rep-password']){
          this.errors.password.push ('Passwords do not match');
          this.errors['rep-passwords'].push('Passwords do not match');

       
      }
      return this;
    }


hasErrors = () => {
    for (const errorArra of this.errors){
        if(prop.lenght)
}

printErrors = () => {

}

  }
  // PAVYZDYS
  // localStorage.setItem('users', JSON.stringify([{
  //   login: 'Serbentautas',
  //   password: 'admin'
  // }]));
  