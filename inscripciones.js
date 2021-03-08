/*Esta funcion agrega a la tabla de inscritos los valores del formulario y esconde el mensaje*/
function inscripciones(){
    document.getElementById("mensaje").hidden = true;
    

    var tabla = document.getElementById("tabla");
    tabla.style.visibility = "visible";

    username = document.getElementById("user").value;
    edad = document.getElementById("edad").value;
    cat = document.getElementById("categoria").value;
    
    var fila = tabla.insertRow(1);
        
    var cell1 = fila.insertCell(0);
    var cell2 = fila.insertCell(1);
    var cell3 = fila.insertCell(2);
        
    cell1.innerHTML = username;
    cell2.innerHTML = edad; 
    cell3.innerHTML = cat;           
}

/*Esta funcion borra todas las filas creadas y muestra el mensaje */
function borrar(){
    document.getElementById("mensaje").hidden = false;
    tabla.style.visibility = "hidden";
}

/*Reinicio del formulario */
function reinciar(){
    document.getElementById("form").reset(); 
}

function formulariocompleto() {
    if (username != '' && age != '' && order != '') {
        return true;
    }
}


