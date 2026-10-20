let arregloL = [];
let arregloR = [];

function agregarEdad(){
    let edadTx = document.getElementById("edad").value;
    let edad = parseInt(edadTx);

    arregloL.push(edad);

    pintarArregloIzquierda();
}

function pintarArregloIzquierda(){
    let txtArregloL;
    let num;
    let cmpIzquierda = document.getElementById("tablaIzquierda");

    for(let i = 0;i < arregloL.length;i++){
        num = arregloL[i]

        txtArregloL += "<tr><td>"
        txtArregloL +=  num
        txtArregloL += "</td><td><button class='btn-eliminar'onclick='eliminarIzquierdo("+ i +")'>Eliminar</button></td><td>"+"<button class='btn-mover' onclick='moverHaciaDerecha("+ i +")'>➜</button></td></tr>"
    }

    cmpIzquierda.innerHTML = txtArregloL;
}

function pintarArregloDerecha(){
    let txtArregloR;
    let num;
    let cmpDerecha = document.getElementById("tablaDerecha");

    for(let i = 0;i < arregloR.length;i++){
        num = arregloR[i]

        txtArregloR += "<tr><td>"
        txtArregloR +=  num
        txtArregloR += "</td><td><button class='btn-eliminar'onclick='eliminarDerecho("+ i +")'>Eliminar</button></td><td>"+"<button class='btn-mover' onclick='moverHaciaIzquierda("+ i +")'>⬅</button></td></tr>"
    }

    cmpDerecha.innerHTML = txtArregloR;
}

function eliminarDerecho(indice){
    arregloR.splice(indice, 1)

    pintarArregloDerecha();
}

function eliminarIzquierdo(indice){
    arregloL.splice(indice, 1)

    pintarArregloIzquierda();
}

function moverHaciaDerecha(indice){
    let cambio = arregloL[indice]

    arregloR.push(cambio)

    arregloL.splice(indice, 1)

    pintarArregloDerecha();
    pintarArregloIzquierda();
}

function moverHaciaIzquierda(indice){
    let cambio = arregloR[indice]

    arregloL.push(cambio)

    arregloR.splice(indice, 1)

    pintarArregloDerecha();
    pintarArregloIzquierda();
}