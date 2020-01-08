class LoginManager {
  constructor() {}

  formObjectFromform = form => {
    let formInputs = Array.from(formLogin).slice(0, -1);
    let formData = {};
    formInputs.forEach(input => {
      if (input.type == "checkbox") {
        formData[input.id] = input.checked;
      } else formData[input.id] = input.value;
    });
    return formData;
  }

  register = (user, pass) =>{
   
  }
}

const LoginManager = new LoginManager();
