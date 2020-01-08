const formLogin = document.querySelector('.js-form-login');

function handleLogin(event) {
    event.preventDefault();
    let formData = loginManager.formObjectFromform(formLogin);
    console.log(formData);
}

formLogin.addEventListener('submit', handleLogin);
