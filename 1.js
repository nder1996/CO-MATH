// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



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


//Escritura

firebase.database().ref('Formulario_Registro/' + "Juan_Pablo").set({
        
        Apellido: "meneses",
        Contraseña: "123456789",
        Email: "nder@gmail.com",
        Grado: "Octavo",
        Username: "Juan_Pablo",
        Nombre: "juan",

});


//Lectura

const Formulario_Registro = firebase.database().ref();

const Username = Formulario_Registro.child('Formulario_Registro');

Username.on("child_added",  snap =>{

    let User = snap.val();

    Estudiantes  = User.Username;

    Estu = document.getElementById("Estudiantes");

    Estu.inner+=`Estu`;

    console.log("USER_NAME : " , Estu);

})
