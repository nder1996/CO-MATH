let Contador = 0;
var claves_user = []



var firebaseConfig = {
    apiKey: "AIzaSyBU0Tbmu5B_sO2k-N2CX6gD16F8KFFPt7g",
    authDomain: "bd-seminario.firebaseapp.com",
    databaseURL: "https://bd-seminario-default-rtdb.firebaseio.com",
    projectId: "bd-seminario",
    storageBucket: "bd-seminario.appspot.com",
    messagingSenderId: "437801277158",
    appId: "1:437801277158:web:5e5ef674dc0bdc54338d27",
    measurementId: "G-N1D2TJ3FBS"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();




function Eliminar_Inncesario(Dato) {

    if (Dato !== undefined) {
        if (Dato !== null) {
            for (i = 0; i < Dato.length; i++) {

                if (Dato[i] == '"') {
                    Dato = Dato.replace('"', '');
                }
                if (Dato[i] == " \ ") {
                    Dato = Dato.replace(' \ ', '');
                }

            }
        }
    }

    return Dato;

}


function Agregar_Estudiante() {

    Nombre = $("#Nombre").val();
    Apellido = $("#Apellido").val();
    Grado = $("#Grado").val();
    Email = $("#Email").val();
    Username = $("#Username").val();
    Contraseña_1 = $("#Contraseña_1").val();
    Contraseña_2 = $("#Contraseña_2").val();


    Validar_Nombre = /^[a-zA-Z]+[a-zA-Z]+$/;
    Validar_Apellido = /^[a-zA-ZÀ-ÿ\s]{3,15}$/;
    Validar_Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    Validar_Password = /^[A-Za-z0-9]{8,30}$/;
    Validar_Username = /^[a-z0-9_\\_\ü]+$/;



    if (Validar_Nombre.test(Nombre) == true && Validar_Apellido.test(Apellido) == true && Validar_Email.test(Email) == true && Validar_Password.test(Contraseña_1) == true && Validar_Password.test(Contraseña_2) == true && Validar_Username.test(Username) == true) {

        firebase.database().ref('Formulario_Registro/' + Username).set({

            Apellido: Eliminar_Inncesario(Apellido),
            Contraseña: Eliminar_Inncesario(Contraseña_1),
            Email: Eliminar_Inncesario(Email),
            Grado: Eliminar_Inncesario(Grado),
            Username: Eliminar_Inncesario(Username),
            Nombre: Eliminar_Inncesario(Nombre),

        });

        Swal.fire({
            title: 'Estudiante Agregado Con Exito',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })

    } else {


        Swal.fire({
            icon: 'error',
            title: 'Ingresa Datos Correctos!',
        })
    }

}

function Eliminar_Estudiante(Username) {

    console.log("USUARIO A ELIMINAR : ",Username)

    firebase.database().ref('Formulario_Registro/' + Username).remove();
    window.location.reload();

}

function Editar_Estudiante(Username) {

   


    //const Formulario = firebase.database().ref();


    firebase.database().ref().child("Formulario_Registro/" + Username).on('value', snap => {

        let User = snap.val();

        $("#Nombre_Edit").val(User.Nombre);
        $("#Apellido_Edit").val(User.Apellido);
        $("#Grado_Edit").val(User.Grado);
        $("#Email_Edit").val(User.Email);
        $("#Username_Edit").val(User.Username);
        $("#Contraseña_Edit_1").val(User.Contraseña);
        $("#Contraseña_Edit_2").val(User.Contraseña);
        
        });

        /*if(User.Username!=null && User.Username!=undefined){

             console.log("ESTE ES USERNAME : ", User.Username );
        }

        
        
        /*$("#Apellido_Edit").val(User.Apellido).val();
        $("#Grado_Edit").val(User.Grado).val();
        $("#Email_Edit").val(User.Email).val();
        $("#Username_Edit").val(User.Username).val();
        $("#Contraseña_Edit").val(User.Contraseña).val();*/

  


    /*firebase.database().ref('Formulario_Registro/'+Username).once('value').then(function(snapshot){

      /*  document.getElementById("Nombre_Edit").value = snapshot.val().Nombre;
        document.getElementById("Apellido_Edit").value = snapshot.val().Apellido;
        document.getElementById("Grado_Edit").value = snapshot.val().Grado;
        document.getElementById("Email_Edit").value = snapshot.val().Email;*/
        //document.getElementById("Username_Edit").value =  snapshot.val().Username;
        /*document.getElementById("Contraseña_Edit_1").value = snapshot.val().Contraseña;
        document.getElementById("Contraseña_Edit_2").value = snapshot.val().Contraseña;*//*
    });*/



}

function Actualizar_Datos(Key_Estudiante) {




    Nombre = $("#Nombre_Edit").val();
    Apellido = $("#Apellido_Edit").val();
    Grado = $("#Grado_Edit").val();
    Email = $("#Email_Edit").val();
    Username_1 = $("#Username_Edit").val();
    Contraseña_1 = $("#Contraseña_Edit_1").val();
    Contraseña_2 = $("#Contraseña_Edit_2").val();

    Validar_Nombre = /^[a-zA-Z]+[a-zA-Z]+$/;
    Validar_Apellido = /^[a-zA-ZÀ-ÿ\s]{3,15}$/;
    Validar_Email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    Validar_Password = /^[A-Za-z0-9]{8,30}$/;
    Validar_Username = /^[a-z0-9_\\_\ü]+$/;



    if (Validar_Nombre.test(Nombre) == true && Validar_Apellido.test(Apellido) == true && Validar_Email.test(Email) == true && Validar_Password.test(Contraseña_1) == true && Validar_Password.test(Contraseña_2) == true && Validar_Username.test(Username_1) == true) {

           

        firebase.database().ref('Formulario_Registro/' + Username_1).update({
            Apellido: Apellido,
            Contraseña: Contraseña_1,
            Email: Email,
            Grado: Grado,
            Username: Username_1,
            Nombre: Nombre,
        });


        window.location.reload();

            
            //Eliminar_Estudiante(Key_Estudiante);

       // Eliminar_Estudiante(Key_Estudiante);
        



        Swal.fire({
            title: 'Los Datos Han Sido Editados',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })



    } else {

        console.log("Nombre : ",Nombre) ; console.log("Apellido : ",Apellido) ; console.log("Grado : ",Grado) ; console.log("Email : ",Email) ;console.log("Username : ",Username_1) ;

        console.log("Contraseña_1 : ",Contraseña_1) ;console.log("Contraseña_2 : ",Contraseña_2) ;


        Swal.fire({
            icon: 'error',
            title: 'Ingresa Datos Correctos!',
        })
    }

}




function Leer_Datos() {

    let Info_1;
    let Username_Info = [];
    const Formulario_Registro = firebase.database().ref();
    const Estudiante = Formulario_Registro.child('Formulario_Registro');

    Estudiante.on("child_added", snap => {
        let User = snap.val();
        Contador += 1;
        Estu = document.getElementById("Datos_Estudiantes");

        Estu.innerHTML += `
                <tr>
                <th scope="row">${Contador}</th>
                <td>${Eliminar_Inncesario(User.Username)}</td>
                <td>${Eliminar_Inncesario(User.Nombre)}</td>
                <td>${Eliminar_Inncesario(User.Apellido)}</td>
                <td>${Eliminar_Inncesario(User.Email)}</td>
                <td>${Eliminar_Inncesario(User.Grado)}</td>
                <th scope="col" class="Datos_Estudiante" id="Estudiante_${Contador}">
                            <div class="modal fade" id="Edit_Estudiante" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title m-auto" id="exampleModalLabel">Modifica Los Datos Del Estudiante</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <br>
                                                        <form>
                                                            <div class="form-datos mb-3">
                                                                <input id="Nombre_Edit" type="text" class="form-control" id="recipient-name" placeholder="Nombre" required>
                                                                <input id="Apellido_Edit" type="text" class="form-control" id="recipient-name" placeholder="Apellido" required>
                                                                <select class="form-select" aria-label="Default select example" id="Grado_Edit" required>
                                                                    <option selected>¿Cual es tu grado académico?</option>
                                                                    <option value="Sexto de bachillerato">Sexto de bachillerato</option>
                                                                    <option value="Septimo de bachillerato">Septimo de bachillerato</option>
                                                                    <option value="Octavo de bachillerato">Octavo de bachillerato</option>
                                                                </select>
                                                                <input id="Email_Edit" type="text" class="form-control"  placeholder="Email" required>
                                                                <input id="Username_Edit" type="text" class="form-control"  placeholder="Username" required>
                                                                <input id="Contraseña_Edit_1" type="text" class="form-control" placeholder="Password" required>
                                                                <input id="Contraseña_Edit_2" type="text" class="form-control" placeholder="Confirm Password" required>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                        <button type="button" class="btn btn-primary" onclick=Actualizar_Datos('${Eliminar_Inncesario(User.Username)}')>Actualizar Datos</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Edit_Estudiante" data-bs-whatever="@mdo" id="Edit_${Contador}" onclick=Editar_Estudiante('${User.Username}')>Editar</button>
                    <button type="button" class="btn btn-danger" id="Elim_${Contador}" onclick=Eliminar_Estudiante('${Eliminar_Inncesario(User.Username)}')>Eliminar</button>
                </th>
            </tr>
`

    });


}