var nombreCompleto = document.getElementById('nombreCompleto');
var campoUsuario = document.getElementById('campoUsuario');
var campoContrasena = document.getElementById('campoContrasena');
var confirmarContrasena = document.getElementById('confirmarContrasena');
var correo = document.getElementById('correo');
var confirmarCorreo = document.getElementById('confirmarCorreo');
var telefono = document.getElementById('telefono');
var direccionResidencia = document.getElementById('direccionResidencia');

var datosCompletos = [];
datosCompletos.push(nombreCompleto);
datosCompletos.push(campoUsuario);
datosCompletos.push(campoContrasena);
datosCompletos.push(confirmarContrasena);
datosCompletos.push(correo);
datosCompletos.push(confirmarCorreo);
datosCompletos.push(telefono);
datosCompletos.push(direccionResidencia);

console.log(datosCompletos);

function validar_datos(usuario, contrasena) {
    validar_usuario(usuario);
    validar_contrasena(contrasena);
    
}

function validar_usuario(string) {
    var alfanumerico = /^[A-Z][a-zA-Z0-9]{6,12}$/
    //console.log(string.search(alfanumerico));

    if (alfanumerico.test(string)) {
        //console.log("Test contiene solo caracteres alfanuméricos");
        //console.log("Usuario valido");
        return true;
    }else{
        //console.log(0);
        //console.log("Usuario invalido");
        return false;
    }
}

function validar_contrasena(string) {
    var validacion = /^[A-Z][a-zA-Z!@#-_]{8,16}/

    if (validacion.test(string)) {
        //console.log("Contrasena valida");
        return true;
    }else{
        //console.log("Contrasena invalida");
        return false;
    }
}
/* REGISTRO 2 */
function ordenarArreglo_Apellido(arreglo) {
    
}

function retornarRegistroMedio(args) {
    
}


//module.exports.validar_usuario = validar_usuario;
//module.exports.validar_contrasena = validar_contrasena;

