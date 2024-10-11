function verificarCaptcha() {
    const input = document.getElementById('captcha-input').value.trim();
    const mensaje = document.getElementById('captcha-message');

    if (input === 'wvphnh') {
        mensaje.textContent = 'Verificación exitosa. ¡No eres un robot!';
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Código incorrecto. Inténtalo de nuevo.';
        mensaje.style.color = 'red';
    }
}


function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe inmediatamente

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaMessage = document.getElementById('captcha-message');
    const errorMessage = document.getElementById('error-message');

    // Texto esperado del CAPTCHA (ahora es "wvphnh")
    const captchaCorrecto = 'wvphnh';

    // Validación de las contraseñas
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
    }

    // Validación del CAPTCHA
    if (captchaInput !== captchaCorrecto) {
        captchaMessage.textContent = 'El texto del CAPTCHA es incorrecto.';
        captchaMessage.style.color = 'red';
    } else {
        captchaMessage.textContent = '';
    }

    // Si las contraseñas coinciden y el CAPTCHA es correcto, se redirige al login
    if (password === confirmPassword && captchaInput === captchaCorrecto) {
        window.location.href = 'login.html'; // Redirige a la página de login
    }
}