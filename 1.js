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

function Validar_User(Dato_1, Dato_2) {

    //console.log("Dato_original : ",Dato_1," Dato Sin comillas : ",Dato_2)
    claves_user.push(Dato_1, Dato_2)
}



//function Agregar_Estudiante1(Username, Password, Nombre, Apellido, Email, Contraseña) {

function Agregar_Estudiante() {

    Nombre = $("#Nombre").val();
    Apellido = $("#Apellido").val();
    Grado = $("#Grado").val();
    Email = $("#Email").val();
    Username = $("#Username").val();
    Contraseña = $("#Contraseña").val();

    if (Nombre != undefined || Apellido != undefined || Grado != undefined || Email != undefined || Username != undefined || Password != undefined) {
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






function Eliminar_Estudiante(Estudiante) {

    let Dato = firebase.database().ref("Formulario_Registro/");

    Dato.child(Estudiante).remove();

    document.location.reload();

}



function Editar_Estudiante() {
    alert('editar mundo')
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
        var Dato_Username = User.Username;
        Estu.innerHTML += `
                <tr>
                <th scope="row">${Contador}</th>
                <td>${Eliminar_Inncesario(User.Username)}</td>
                <td>${Eliminar_Inncesario(User.Nombre)}</td>
                <td>${Eliminar_Inncesario(User.Apellido)}</td>
                <td>${Eliminar_Inncesario(User.Email)}</td>
                <td>${Eliminar_Inncesario(User.Grado)}</td>
                <th scope="col">
                    <button type="button" class="btn btn-primary" id="Edit_${Contador}" onclick=Editar_Estudiante('${Eliminar_Inncesario(User.Username)}')>Editar</button>
                    <button type="button" class="btn btn-danger" id="Elim_${Contador}" onclick=Eliminar_Estudiante('${Eliminar_Inncesario(User.Username)}')>Eliminar</button>
                </th>
            </tr>
`

        Validar_User(Eliminar_Inncesario(User.Username), User.Username)


    });


}