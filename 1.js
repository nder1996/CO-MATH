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




//function Agregar_Estudiante1(Username, Password, Nombre, Apellido, Email, Contraseña) {

function Agregar_Estudiante() {

    Nombre = $("#Nombre").val();
    Apellido = $("#Apellido").val();
    Grado = $("#Grado").val();
    Email = $("#Email").val();
    Username = $("#Username").val();
    Contraseña = $("#Contraseña").val();



    if (Nombre !== undefined || Apellido !== undefined || Grado !== undefined || Email !== undefined || Username !== undefined || Contraseña !== undefined) {
        firebase.database().ref('Formulario_Registro/' + Username).set({
            Apellido: Apellido,
            Contraseña: Contraseña,
            Email: Email,
            Grado: Grado,
            Username: Username,
            Nombre: Nombre,
        });
    }
}











function Eliminar_Estudiante(Estudiante) {

    let Dato = firebase.database().ref("Formulario_Registro/");

    Dato.child(Estudiante).remove();

    document.location.reload();

}

//${Eliminar_Inncesario(User.Username)},${Eliminar_Inncesario(User.Contraseña)},${Eliminar_Inncesario(User.Nombre)},${Eliminar_Inncesario(User.Apellido)},${Eliminar_Inncesario(User.Email)},${Eliminar_Inncesario(User.Grado)})

function Editar_Estudiante(Username) {

    var Estudiante ;

    const Formulario = firebase.database().ref();


    Formulario.child("Formulario_Registro/"+Username).on('value', snap => {

         let User = snap.val();

         console.log("DATOS : ",User.Username)

    });





    // var Datos = firebase.database().ref('Formulario_Registro/');

    //    console.log("DATOS : ",Datos)

/*


 function getClient(key)
  {
    var client;
    db.child("Client")
      .on('value', function(snapshot){
        client = snapshot.child(key).val()
        console.log("1", client)
      });
    console.log("2", client)
    return client;
  }


*/

                $("#Nombre_Edit").val('Juan');
                $("#Apellido_Edit").val('Pedro castillo');
                $("#Grado_Edit").val("noveno");
                $("#Email_Edit").val("nder@gmail.com");
                $("#Username_Edit").val("a5f45df");
                $("#Contraseña_Edit").val("5a4d5sdf4asdf");





            }




            /*

function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

*/




            /*  <button type="button" class="btn btn-primary" id="Edit_${Contador}" onclick=Editar_Estudiante('${Eliminar_Inncesario(User.Username)}','${Contador}')>Editar</button> */

            function Leer_Datos() {

                let Info_1;
                let Username_Info = [];
                const Formulario_Registro = firebase.database().ref();
                const Estudiante = Formulario_Registro.child('Formulario_Registro');

                Estudiante.on("child_added", snap => {
                    let User = snap.val();
                    Contador += 1;
                    Estu = document.getElementById("Datos_Estudiantes");

                    // claves_user.push(User.Username, User.Nombre, User.Apellido, User.Email, User.Grado, User.Contraseña);

                    // console.log("Contador : ",claves_user)

                    ///${Eliminar_Inncesario(User.Username)},${Eliminar_Inncesario(User.Contraseña)},${Eliminar_Inncesario(User.Nombre)},${Eliminar_Inncesario(User.Apellido)},${Eliminar_Inncesario(User.Email)},${Eliminar_Inncesario(User.Grado)}

                    Estu.innerHTML += `
                <tr>
                <th scope="row">${Contador}</th>
                <td>${Eliminar_Inncesario(User.Username)}</td>
                <td>${Eliminar_Inncesario(User.Nombre)}</td>
                <td>${Eliminar_Inncesario(User.Apellido)}</td>
                <td>${Eliminar_Inncesario(User.Email)}</td>
                <td>${Eliminar_Inncesario(User.Grado)}</td>
                <th scope="col" class="Datos_Estudiante" id="Estudiante_${Contador}">
         

           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Edit_Estudiante" data-bs-whatever="@mdo" id="Edit_${Contador}" onclick=Editar_Estudiante(Eliminar_Inncesario('${Eliminar_Inncesario(User.Username)}'))>Editar</button>
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
                                                        <button type="button" class="btn btn-primary">Actualizar Datos</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    <button type="button" class="btn btn-danger" id="Elim_${Contador}" onclick=Eliminar_Estudiante('${Eliminar_Inncesario(User.Username)}')>Eliminar</button>
                </th>
            </tr>

`






                });


            }