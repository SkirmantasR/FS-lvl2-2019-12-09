const formLogin = document.querySelector('.js-form-login');

function handleRegister(event) {
    event.preventDefault();
    let formData = loginManager.formObjectFromform(formLogin);
    console.log(formData);
}

formLogin.addEventListener('submit', handleLogin);
