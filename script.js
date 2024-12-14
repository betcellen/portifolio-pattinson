function bemVindo() {
    alert("Seja bem-vindo ao meu portifólio")
}

function voltarAoTopo() {
    scrollTo({top:0, behavior: "smooth"})
}

const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

function validarNome() {
    if (nome.value.length >= 3) {
        nome.classList.remove('is-invalid');
        nome.classList.add('is-valid');
    } else {
        nome.classList.remove('is-valid');
        nome.classList.add('is-invalid');
    }
}

function validarEmail() {
    if (email.value.includes('@')) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    } else {
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
    }
}

function validarMensagem() {
    if (msg.value.length >= 2) {
        msg.classList.remove('is-invalid');
        msg.classList.add('is-valid');
    } else {
        msg.classList.remove('is-valid');
        msg.classList.add('is-invalid');
    }
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    validarNome();
    validarEmail();
    validarMensagem();

    if (formulario.querySelectorAll('.is-invalid').length === 0) {
        alert('Registro realizado com sucesso!');
    }
});