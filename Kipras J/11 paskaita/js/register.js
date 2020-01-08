const formLogin = document.querySelector('.js-form-register');

function handleRegister(event) {
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

formLogin.addEventListener('submit', handleRegist