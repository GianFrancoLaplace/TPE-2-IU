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
    event.preventDefault(); 

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaMessage = document.getElementById('captcha-message');
    const errorMessage = document.getElementById('error-message');

    
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

document.addEventListener("DOMContentLoaded", function () {
    const loading = document.getElementById("loading");
    const mainContainer = document.querySelector(".main-container");
    const loadingPercentage = document.createElement('div');
    loadingPercentage.classList.add('loading-percentage');
    loading.appendChild(loadingPercentage);

    let progress = 0;
    const interval = setInterval(() => {
        progress += 2; 
        loadingPercentage.textContent = `Cargando... ${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            loading.style.display = 'none'; // Oculta el contenedor de carga
            mainContainer.style.visibility = 'visible'; // Muestra el contenido principal
        }
    }, 100);
});

function CheckLogin(event) {
    event.preventDefault(); 
    
    // Obtiene los valores de los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifica que los campos no estén vacíos
    if (email && password) {
        

        // Redirige a home.html si todo es correcto
        window.location.href = 'home.html';
    } else {
        alert("Por favor, completa todos los campos."); 
    }
}

function redireccionarAlHome() {
    window.location.href = 'home.html'; // Redirige a home.html al hacer clic en el botton Ingresa con Google
}


//menu hamburguesa desplegable
document.querySelector('.menu-hamburguesa').addEventListener('click', function() {
    document.querySelector('.menu-container').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.menu-container').classList.remove('active');
});

const playButton = document.querySelector('.play-btn-free');

// Agrega el evento click
playButton.addEventListener('click', function() {
    window.location.href = 'vj.html';  // Redirige a la página "vj.html"
});

document.addEventListener('DOMContentLoaded', () => {

    const botones = document.querySelectorAll('.add-btn');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            boton.textContent = 'Agregado';
  
            const icono = document.createElement('i');
            icono.classList.add('material-symbols-outlined');
            icono.textContent = 'check_circle';
            boton.appendChild(icono);
        });
    });
});