/* REGISTRO 2 */
/*
var lista1 = new Array;

var lista1 = [
    {nombre:'Paulina', apellido:'Vasquez', edad:29},
    {nombre:'Daniel', apellido:'Castrillon', edad:30},
    {nombre:'Omaira', apellido:'Alvarez',edad:52},
    {nombre:'Juan Felipe', apellido:'Ospina',edad:12},
    {nombre:'Robinson', apellido:'Castrillon',edad:29},
    {nombre:'Camilo', apellido:'Vasquez', edad:29},
    {nombre:'Carlos', apellido:'Castrillon', edad:30},
    {nombre:'Gustavo', apellido:'Alvarez',edad:52},
    {nombre:'Viviana', apellido:'Ospina',edad:12},
    {nombre:'Hugo', apellido:'Castrillon',edad:29},
    {nombre:'Carolina', apellido:'Vasquez', edad:29},
    {nombre:'Luisa', apellido:'Castrillon', edad:30},
    {nombre:'Juan', apellido:'Alvarez',edad:52},
    {nombre:'Maximo', apellido:'Ospina',edad:12},
    {nombre:'Minimo', apellido:'Castrillon',edad:29},
    {nombre:'Arriba', apellido:'Vasquez', edad:29},
    {nombre:'Abajo', apellido:'Castrillon', edad:30},
    {nombre:'Izquierda', apellido:'Alvarez',edad:52},
    {nombre:'Derecha', apellido:'Ospina',edad:12},
    {nombre:'Robinson', apellido:'Castrillon',edad:29}
    //{nombre:'Robinson', apellido:'Castrillon',edad:29}

];
*/
function ordenarArreglo_Apellido(arreglo) {
    let conteo = arreglo.length;
    if (conteo > 20) {
        console.log(arreglo);
        return false;
    }else{
        arreglo.sort(function(a,b){return a.apellido.localeCompare(b.apellido);
        });
        console.log(arreglo);
        return arreglo;
    }
}

function retornarRegistroMedio(args) {
    let elementos = args.length;
    let mitad = Math.round(elementos/2)-1;
    return args[mitad];
    
}

//var ordenado = ordenarArreglo_Apellido(lista1);
//var medio = retornarRegistroMedio(ordenado);

//console.log(ordenado);
//console.log(medio);

  
module.exports.ordenarArreglo_Apellido = ordenarArreglo_Apellido;
module.exports.retornarRegistroMedio = retornarRegistroMedio;