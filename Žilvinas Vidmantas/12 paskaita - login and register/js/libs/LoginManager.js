class LoginManager {
  constructor() {

  }

  formObjectFromform = (form) => {
    let formInputs = Array.from(form).slice(0, -1);
    let formData = {};
    formInputs.forEach(input => {
      if (input.type == 'checkbox') {
        formData[input.id] = input.checked;
      } else formData[input.id] = input.value;
    });
    return formData;
  }
  
  register = ({login, password}) => {
    let lastUserId = JSON.parse(localStorage.getItem('lastUserId'));
    let users = JSON.parse(localStorage.getItem('users'));
    users.push({ id: ++lastUserId, login, password });
    localStorage.setItem('lastUserId', JSON.stringify(lastUserId))
    localStorage.setItem('users', JSON.stringify(users));
  }
}

const loginManager = new LoginManager();

// Duomenų įdejimas į Naršyklės atmintį - localStorage
// localStorage.setItem('lastUserId', JSON.stringify(0));
// localStorage.setItem('users', JSON.stringify([]));