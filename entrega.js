const validarClave = (clave) =>{
    if (clave.length < 5){
        return true
    } 
    else{
        return false
    }
}
alert("Bienvenido a nuestra botanica online")
const USUARIO = prompt("Ingrese su Usuario")
let clave = prompt("Ingrese una contraseña con al menos 5 caracteres")

while (validarClave(clave)){
    clave = prompt("Error la contraseña ingresada no cumple con la cantidad de caracteres requeridos. Por favor ingrese una contraseña nueva")
}

const edad = parseInt(prompt("Ingresa tu edad:"));

if (isNaN(edad)) {
  alert("Por favor, ingresa una edad válida.");
} else {
  if (edad < 18) {
    alert("Error: Eres menor de edad");
  }
}
const MAIL = prompt("Por favor coloque su mail")
alert("Gracias " + USUARIO + " por completar estos datos, a continuación te ofrecemos nuestro catalogo de productos:" )

const usuariosBotanica = [];

function agregarUsuario(usuario,nombre, apellido, edad,mail,clave) {
  usuarios[usuario] = {

    clave: contraseña,
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    mail: mail,
  };
}

agregarUsuario("TitoelSanchez45","Alberto","Sanchez",45,"TitoSanchez@gmail.com","654321");

function verificarCredenciales(usuarioIngresado, claveIngresada) {
  const usuario = usuarios[usuarioIngresado];
  return usuario && usuario.clave === claveIngresada;
}

const usuarioIngresado = "TitoelSanchez45";
const claveIngresada = "654321";

if (verificarCredenciales(usuarioIngresado, claveIngresada)) {
  console.log("Inicio de sesión exitoso");
} else {
  console.log("Error: Datos incorrectos");
}

let parrafo = document.getElementById("Parrafo");
console.log(parrafo.innerHTML);
  






 





