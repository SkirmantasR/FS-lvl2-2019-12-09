const formLogin = document.querySelector('.js-form-login');

function handleLogin(event) {
    event.preventDefault();
    let formInputs = Array.from(formLogin).slice(0, -1);
    let formData = {};
    formInputs.forEach(input => {
        if (input.type == 'checkbox') {
            formData[input.id] = input.checked;
        } else formData[input.id] = input.value;
    })
    console.log(formData);
}

formLogin.addEventListener('submit', handleLogin);
