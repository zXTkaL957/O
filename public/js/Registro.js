const Comprobar = () => {
    var pass = document.getElementById("pass");
    var confirm = document.getElementById("pass-confirm");
    var err = document.getElementById("err");
    var send = document.querySelector("#send");
    send.disabled = true;
    if (pass.value.length === 0 || confirm.value.length === 0) {
        err.innerHTML = "Tu contraeña no debería estar vacia!";
        err.style.color = "#E74C3C";
    } else if (pass.value !== confirm.value) {
        err.innerHTML = "Las contraseñas no coinciden";
        err.style.color = "#E74C3C";
    } else if (pass.value.length <= 7) {
        err.innerHTML = "Tu contraseña es muy debil";
        err.style.color = "#E74C3C";
    } else {
        err.innerHTML = "Las contraseñas coinciden";
        err.style.color = "#229954";
        send.disabled = false;
    }
};
const Ver = () => {
    var pass = document.getElementById("pass");
    var confirm = document.getElementById("pass-confirm");
    var button = document.querySelector("#ver");
    pass.setAttribute('type', 'text');
    confirm.setAttribute('type', 'text');
    button.setAttribute("onclick", "Ocultar()");
};
const Ocultar = () => {
    var pass = document.getElementById("pass");
    var confirm = document.getElementById("pass-confirm");
    var button = document.querySelector("#ver");
    pass.setAttribute('type', 'password');
    confirm.setAttribute('type', 'password');
    button.setAttribute("onclick", "Ver()");
};

const Correo = () => {
    var mail = document.getElementById('mail');
    var err = document.getElementById('err');

    if (mail.value.length >= 29) {
        err.style.color = "#E74C3C";
        err.innerHTML = "Tu correo es demasiado largo";
    } else {
        err.style.color = "#229954";
        err.innerHTML = " ";
    }
};

