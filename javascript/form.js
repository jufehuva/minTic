var nombreCompleto;
var campoUsuario = document.getElementById('campoUsuario');
var password;
var confirmPassword;
var correo;
var confirmarCorreo;
var telefono;
var direccionResidencia;

var validacionUsuario="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var caracteresEspeciales ="!@#-_";
var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numeros="0123456789";


function validar_usuario(usuario) {
    var contador=0;
    for (let i = 0; i < usuario.length; i++) {
         console.log(usuario[i]);
         for (let j = 0; j < validacionUsuario.length; j++) {
            if (usuario[i] == validacionUsuario[j] ) {
                console.log(true);
                contador++;
            }
         }
     }
     if (contador == usuario.length && usuario.length >=6 && usuario.length <=12 ) {
         console.log("Valido");
     }else{
         console.log("No valido");
     }
}


function validar_contrasena(contrasena) {
    var contador = 0;
    for (let i = 0; i < contrasena.length; i++) {
        for (let j = 0; j < mayusculas.length; j++) {
            if (contrasena[0] == mayusculas[j]) {
                contador++;
            }
            
        }
    }
}

//validar_usuario("Hola145we*");