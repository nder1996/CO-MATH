//Email = prompt("Ingrese Tu Email")
//Nombre = prompt("Ingresa Tu Nombre")
//Apellido = prompt("Ingresa Tu Apellido")

Username = prompt("Ingresa Tu Username")

function ValidarEmail() {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(Email)) {
        alert("La dirección de email " + Email + " es correcta!.");
    } else {
        alert("La dirección de email es incorrecta!.");
    }
}




Validar_Nombre = /^[a-zA-Z]+[a-zA-Z]+$/;
Validar_Apellido = /^[a-zA-ZÀ-ÿ\s]{3,15}$/;
Validar_Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
Validar_Password = /^[A-Za-z0-9]{8,30}$/;
Validar_Username = /^[a-z0-9_\\_\ü]+$/;

alert(Validar_Username.test(Username));

