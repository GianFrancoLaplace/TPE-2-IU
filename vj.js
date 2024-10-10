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