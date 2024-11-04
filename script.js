function registrar() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Crear un objeto de usuario
    const usuario = {
        username: username,
        password: password
    };

    // Guardar en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert('Usuario registrado con éxito');
    window.location.href = "/index.html";
}

function iniciarSesion() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Recuperar el usuario de localStorage
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

    if (usuarioGuardado) {
        if (usuarioGuardado.username === loginUsername && usuarioGuardado.password === loginPassword) {
            alert('Inicio de sesión exitoso');
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    } else {
        alert('No hay usuarios registrados');
    }  
    window.location.href = "index2.html";
}
 