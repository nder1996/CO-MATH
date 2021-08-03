//Email = prompt("Ingrese Tu Email")
Nombre = prompt("Ingresa Tu Nombre")
//Apellido = prompt("Ingresa Tu Apellido")

//Username = prompt("Ingresa Tu Username")


Validar_Nombre = /^[a-zA-Z]+[a-zA-Z]+$/;
Validar_Apellido = /^[a-zA-ZÀ-ÿ\s]{3,15}$/;
Validar_Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
Validar_Password = /^[A-Za-z0-9]{8,30}$/;
Validar_Username = /^[a-z0-9_\\_\ü]+$/;



if(Validar_Nombre.test(Nombre)==true){
    console.log('ola mundo')
}


