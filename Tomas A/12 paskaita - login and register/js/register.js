const formRegister = document.querySelector('.js-form-register');

function handleRegister(event) {
  event.preventDefault();
  const formData = loginManager.formObjectFromform(formRegister);
  const validate = new Validation(formData);
  validate
    .minLength('login', 3)
    .maxLength('login', 16)
    .uniqueLogin();
  validate
    .minLength('password', 5)
    .maxLength('password', 32);
  validate
    .minLength('rep-password', 5)
    .maxLength('rep-password', 32)
    .equalPasswords();

  if (validate.hasErrors()) {
    validate.printErrors();
    return;
  }
  loginManager.register(formData)

}

formRegister.addEventListener('submit', handleRegister);
