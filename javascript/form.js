var nombreCompleto;
var campoUsuario = document.getElementById('campoUsuario');
var campoContrasena = document.getElementById('campoContrasena');
var confirmarContrasena;
var correo;
var confirmarCorreo;
var telefono;
var direccionResidencia;

var validacionUsuario="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var caracteresEspeciales ="!@#-_";
var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numeros="0123456789";

function validar_datos(usuario, contrasena) {
    validar_usuario(usuario);
    validar_contrasena(contrasena);
}

function validar_usuario(usuario) {
    var contador=0;
    for (let i = 0; i < usuario.length; i++) {
         //console.log(usuario[i]);
         for (let j = 0; j < validacionUsuario.length; j++) {
            if (usuario[i] == validacionUsuario[j] ) {
                //console.log(true);
                contador++;
                true;
            }
            else{
                false;
            }
         }
     }
     if (contador == usuario.length && usuario.length >=6 && usuario.length <=12 ) {
        //console.log(usuario); 
        //console.log("Usuario Valido");
        true;
     }else{
         //console.log("Usuario No valido");
         false
     }
     
}


function validar_contrasena(campoContrasena) {
    var contador = 0;
    var primerCaracter = campoContrasena[0];
    var primeraMayuscula = false;
    
    for (let i = 0; i < mayusculas.length; i++) {
        if (mayusculas[i] == primerCaracter) {
            primeraMayuscula = true;
            true;
            //console.log("Mayuscula "+primerCaracter+" "+primeraMayuscula);
        }else{
            false;
        }
    }
    if (primeraMayuscula == true && campoContrasena.length>=8 && campoContrasena.length <= 16) {
        for (let j = 0; j < campoContrasena.length; j++) {
            //console.log(campoContrasena[j]);
            for (let k = 0; k < caracteresEspeciales.length; k++) {
                if (campoContrasena[j] == caracteresEspeciales[k]) {
                    contador++;
                    //console.log(contador);
                    true;
                }else{
                    false;
                }
                
            }
            
        }
    }
    if (contador>0) {
        //console.log("Contrasena valida");
        true;
    }else{
        //console.log("Contrasena invalida");
        false;
    }


}
//module.exports.validar_contrasena = validar_contrasena;
//module.exports.validar_usuario = validar_usuario;