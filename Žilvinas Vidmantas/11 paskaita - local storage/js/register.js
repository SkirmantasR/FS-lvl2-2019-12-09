const formRegister = document.querySelector('.js-form-register');

function handleRegister(event) {
    event.preventDefault();
    let formData = loginManager.formObjectFromform(formRegister);
    console.log(formData);
}

formRegister.addEventListener('submit', handleRegister);
