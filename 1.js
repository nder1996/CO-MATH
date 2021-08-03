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

            Apellido: Apellido,
            Contraseña: Contraseña_1,
            Email: Email,
            Grado: Grado,
            Username: Username,
            Nombre: Nombre,

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

function Eliminar_Estudiante(Username){

        firebase.database().ref('Formulario_Registro/' + Username).remove();
        window.location.reload();
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
                                                        <h5 class="modal-title m-auto" id="exampleModalLabel">Ingresar Nuevo Estudiante</h5>
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
                                                                <input id="Email_Edit" type="text" class="form-control" id="recipient-name" placeholder="Email" required>
                                                                <input id="Username_Edit" type="text" class="form-control" id="recipient-name" placeholder="Username" required>
                                                                <input id="Contraseña_Edit" type="text" class="form-control" id="recipient-name" placeholder="Contraseña" required>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                                        <button type="button" class="btn btn-primary" >Actualizar Datos</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Edit_Estudiante" data-bs-whatever="@mdo" id="Edit_${Contador}" onclick=Editar_Estudiante(Eliminar_Inncesario('${Eliminar_Inncesario(User.Username)}'))>Editar</button>
                    <button type="button" class="btn btn-danger" id="Elim_${Contador}" onclick=Eliminar_Estudiante('${Eliminar_Inncesario(User.Username)}')>Eliminar</button>
                </th>
            </tr>
`

    });


}