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
                        return true;
                    }
                } 
            }
            for (let k = 0; k < mayusculas.length; k++) {
                if (string[0] == mayusculas[k]) {
                    primeraLetra = true;
                    return true;
                }
            }
        }
        return true;
        longitud = true;
    }else{
        return false;
    }
    //console.log("Solo alfanumericos: "+contador+" "+alfanumericos);
    //console.log("Primera letra MAYUSCULA: " + primeraLetra);
    //console.log("Mayor que 6 y menor que 16: " + longitud);
}

function validar_contrasena(string) {
    
}

//module.export.validar_usuario = validar_usuario;
//module.export.validar_contrasena = validar_contrasena;
validar_usuario("danielC00%");

//VALIDACION 2
var nombre = "Daniel!";

var mayusc = /^[A-Z]*$/;
var mayusc1 = /^[A-Z]*$/;
var minusc = /^[a-z]*$/;
var patron = /^[a-zA-Z]*$/;//El * es cualquier cantidad
var numerico = /^[0-9]*$/;//De cero a 9 entre 1 y 3 caracteres
var primeraMayusc = /^[A-Z][a-zA-Z]*$/;//La primera letra mayuscula
var segundaMayusc = /^[A-Z][A-Z][a-zA-Z]*$/; //La primera y segunda letra mayuscula
var especiales = /^[A-Z][a-zA-Z@-_!#]{1,12}$/;

if (especiales.test(nombre)) {
    console.log("1. "+especiales.test(nombre));
}else{
    console.log("1. No es mayuscula - search");
}

if (nombre.search(especiales)) {
    console.log("2. "+nombre.search(especiales));
}else{
    console.log("2. No es mayuscula - search");
}

