var nombreForm;
var apellidoForm;
var lista1 = [];
var lista2 = [];

var lista1 = [
    {nombre:'Daniel', apellido:'Castrillon'},
    {nombre:'Paulina', apellido:'Vasquez'},
    {nombre:'Juan Felipe', apellido:'Ospina'}
];

lista1.push({'nombre':'Omaira','apellido':'Alvarez'});
lista1.push({'nombre':'Viviana','apellido':'Castrllon'});

console.log(lista1);

function arreglo() {
        /* ARRAY */
        nombreCompleto = document.getElementById('nombreCompleto').value;
        campoUsuario = document.getElementById('campoUsuario').value;

        lista1.push(nombreCompleto, apellidoForm);
        console.log(lista1);

        return lista1;
}

function registro() {
    
}
//console.log(arreglo.lista1);