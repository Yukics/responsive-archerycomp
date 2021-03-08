/*Esta funcion agrega a la tabla de inscritos los valores del formulario y esconde el mensaje*/
function inscripciones(){

    username = document.getElementById("user").value;
    edad = document.getElementById("edad").value;
    cat = document.getElementById("categoria").value;    

    if(formulariocompleto()){
        document.getElementById("mensaje").hidden = true;
    

        var tabla = document.getElementById("tabla");
        tabla.style.visibility = "visible";
        
        var fila = tabla.insertRow(1);
        
        var cell1 = fila.insertCell(0);
        var cell2 = fila.insertCell(1);
        var cell3 = fila.insertCell(2);
            
        cell1.innerHTML = username;
        cell2.innerHTML = edad; 
        cell3.innerHTML = cat;

    }        
}

/*Esta funcion borra todas las filas creadas y muestra el mensaje */
function borrar(){    
    var table = document.getElementById("tabla");
    /*Borra las filas agregadas*/  
    for(i=table.rows.length-1;i>=1;i--){
        table.deleteRow(i);
    }

    table.style.visibility = "hidden";
    document.getElementById("mensaje").hidden = false;
}

/*Reinicio del formulario, el metodo reset aplicaba una actualziacion*/
function reiniciar(){
    document.getElementById("user").value = '';
    document.getElementById("edad").value = '';
    document.getElementById("categoria").value = '';     
}

/*Validacion muy basica */
function formulariocompleto() {
    if (username != '' && cat != '' && edad != '' ) {
        return true;
    }
}


