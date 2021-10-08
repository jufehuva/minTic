var nombreCompleto;
var campoUsuario ;
var campoContrasena;
var confirmarContrasena;
var campoCorreo;
var confirmarCorreo;
var telefono;
var direccionResidencia;
var lista = [];

function validar_datos(usuario, contrasena) {
    /* FUNCIONES */
    //validar_usuario(usuario);
    //validar_contrasena(contrasena);

    /* ARRAY */
    nombreCompleto = document.getElementById('nombreCompleto').value;
    campoUsuario = document.getElementById('campoUsuario').value;
    campoContrasena  = document.getElementById('campoContrasena').value;
    confirmarContrasena = document.getElementById('confirmarContrasena').value;
    campoCorreo = document.getElementById('campoCorreo').value;
    confirmarCorreo = document.getElementById('confirmarCorreo').value;
    telefono = document.getElementById('telefono').value;
    direccionResidencia = document.getElementById('direccionResidencia').value;
   
    lista.push({
        nombre:nombreCompleto,
        usuario:campoUsuario,
        contrasena:campoContrasena,
        contrasenaConf:confirmarContrasena,
        correo:campoCorreo,
        correoConf:confirmarCorreo,
        telefono:telefono,
        direccion:direccionResidencia
    });
    
    console.log(lista);
    //console.log('hola');

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

