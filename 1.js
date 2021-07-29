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



function Agregar_Estudiante1(Username){
    firebase.database().ref('Formulario_Registro/' + Username ).set({
      Apellido: "meneses",
        Contraseña: "123456789",
        Email: "nder@gmail.com",
        Grado: "Octavo",
        Username: "Juan_Pablo",
        Nombre: "juan",

    });
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
                <th scope="col">
                    <button type="button" class="btn btn-primary" id="Edit_${Contador}">Editar</button>
                    <button type="button" class="btn btn-danger" id="Elim_${Contador}">Eliminar</button>
                </th>
            </tr>
`

        Validar_User(User.Username, Eliminar_Inncesario(User.Username))


    });


}