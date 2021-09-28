var validacionUsuario="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789";
var caracteresEspeciales ="!@#-_";
var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var numeros="0123456789";

function validar_usuario(string) {
    contador=0;
    alfanumericos = false;
    primeraLetra = false;
    longitud = false;
   
    if (string.length >= 6 && string.length <= 16) {
        for (let i = 0; i < string.length; i++) {
            for (let j = 0; j < validacionUsuario.length; j++) {
                if (string[i] == validacionUsuario[j]) {
                    //console.log(string[i]);
                    //console.log(true);
                    contador++;
                    if (contador == string.length) {
                        alfanumericos =true;
                    }
                } 
            }
            for (let k = 0; k < mayusculas.length; k++) {
                if (string[0] == mayusculas[k]) {
                    primeraLetra = true;
                }
            }
        }
        longitud = true;
    }
    console.log("Solo alfanumericos: "+contador+" "+alfanumericos);
    console.log("Primera letra MAYUSCULA: " + primeraLetra);
    console.log("Mayor que 6 y menor que 16: " + longitud);
}

function validar_contrasena(string) {
    
}

//module.export.validar_usuario = validar_usuario;
//module.export.validar_contrasena = validar_contrasena;
validar_usuario("DanielC05");
