$(document).ready(function(){
    var ARR_ID = [];


    /*REALIZAR EL CICLO PARA LLENAR EL ARREGLO DE LOS IDS CON EL VALOR DE CADA CELDA*/
                        var tableReg = document.getElementById("myTable");
			            for (var i = 1; i < tableReg.rows.length; i++)
			            {
				            var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                            var compareWith = cellsOfRow[1].innerHTML.toLowerCase();
                            //alert(compareWith);
                            //ARR_ID.push(compareWith);
                            ARR_ID.push(parseInt(compareWith));
                        }
                        console.log("Cantidad de elementos en el arreglo: " + ARR_ID.length);

    //Para seleccionar con un click alguna fila de la tabla
    var txt = 0;
    $('tr').click(function(){
        var $x = $(this);
        //alert($x.text());
        for (var i = 0; i < $x.length; i++) 
        {
            txt = $x[i].rowIndex;
        }
    });

    $('button').click(function(){
        var $btn = $(this);
        var cadena = $btn.text();
        console.log(cadena);
        console.log(this.id);
        //switch(cadena)
        switch(this.id)
        {
            case 'btn_Agregar':
                //alert('boton agregar, MASCOTAS');
                //prompt("Soy un prompt :S");
                //confirm("Soy un confirm :D");
                var table = document.getElementById("myTable");
                {
                    var bandera1 = document.getElementById("sexo").value;
                    var bandera2 = document.getElementById("estado").value;
                    var valor0 = document.getElementById("id").value;
                    var valor1 = document.getElementById("nombre").value;
                    var valor2 = document.getElementById("fec_nac").value;
                    var valor3 = document.getElementById("raza").value;
                    var valor4 = document.getElementById("color").value;
                    if(bandera1 != 1 && bandera2 != 1 && valor0.trim() != "" && valor1.trim() != "" && valor2.trim() != "" && valor3.trim() != "" && valor4.trim() != "")
                    {
                        ARR_ID.push(parseInt(valor0));
                        var row = table.insertRow(table.length);
                        row.style.height="50px";
                        var cell0 = row.insertCell(0);
                        var cell1 = row.insertCell(1);
                        var cell2 = row.insertCell(2);
                        var cell3 = row.insertCell(3);
                        var cell4 = row.insertCell(4);
                        var cell5 = row.insertCell(5);
                        var cell6 = row.insertCell(6);
                        var cell7 = row.insertCell(7);


                        cell0.innerHTML = '<td><div class="checkbox"><label><input type="checkbox" name=""id="check_Dogs"></label></div></td>';
                        cell1.innerHTML = '<td>'+valor0+'</td>';
                        cell2.innerHTML = '<td>'+valor1+'</td>';
                        cell3.innerHTML = '<td>'+valor2+'</td>';
                        cell4.innerHTML = '<td>'+valor3+'</td>';
                        cell5.innerHTML = '<td>'+valor4+'</td>';
                        var valor5 = $("#sexo option:selected").html();
                        cell6.innerHTML = '<td>'+valor5+'</td>';
                        var valor6 = $("#estado option:selected").html();
                        cell7.innerHTML = '<td>'+valor6+'</td>';

                        //Limpiar las textBox
                        document.getElementById("id").value = "";
                        document.getElementById("nombre").value = "";
                        document.getElementById("fec_nac").value = "";
                        document.getElementById("raza").value = "";
                        document.getElementById("color").value= "";
                        document.getElementById("sexo").value = 1;
                        document.getElementById("estado").value = 1;
                    }
                    else
                    {
                        alert("Faltan datos para completar el registro!");
                    }
                }
                
                

                // Así accedemos al Valor de la opción seleccionada
                /*var valor = $("#sexo").val();
                alert(valor);
                // Así accedemos al Texto de la opción seleccionada
                var valorT = $("#sexo option:selected").html();
                alert(valorT);
                cell5.innerHTML = '<td>'+valorT+'</td>';*/
            break;
            case 'btn_Eliminar':
                //alert('boton eliminar, MASCOTAS');
                if(txt != 0)
                {
                    //alert("La fila: " +  txt + " si se puede eliminar.");
                    document.getElementById("myTable").deleteRow(txt);
                     var indice = ARR_ID.indexOf(parseInt(txt));
                     delete ARR_ID[indice];
                }
                else
                {
                    alert("La fila: " +  txt + " no puede ser eliminada.");
                }
            break;
            case 'btn_Consultar':
                //alert('boton consultar, MASCOTAS');
                var yea = document.getElementById("myTable").rows.length;
                //alert("Cantidad de registros: " + (yea-1));
                var valor0 = document.getElementById("id").value;
                if(isNaN(valor0) == false)
                {
                    if(valor0.trim() != "")
                    {
                        confirm("Buscar por ID, con valor: " + valor0 + ".");
                        /*REALIZAR EL CICLO PARA LLENAR EL ARREGLO DE LOS IDS CON EL VALOR DE CADA CELDA*/
                        /*var tableReg = document.getElementById("myTable");
			            for (var i = 1; i < tableReg.rows.length; i++)
			            {
				            var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                            var compareWith = cellsOfRow[1].innerHTML.toLowerCase();
                            //alert(compareWith);
                            ARR_ID.push(compareWith);
                        }*/
                        console.log("Cantidad de elementos en el arreglo: " + ARR_ID.length);
                        for(var recorre = 0; recorre < ARR_ID.length; recorre++)
                        {
                            console.log(ARR_ID[recorre]);
                        }
                        
                        var EXISTE = false;
                        for(var j = 0; j < ARR_ID.length; j++)
                        {
                            var elementoArr = ARR_ID[j];
                            var convertion =  parseInt(elementoArr);
                            //alert(valor0 + " Cosas en el arreglo: " + elementoArr);
                            console.log("Valor0: " + valor0);
                            if(valor0 == convertion)
                            {
                                EXISTE = true;
                                break;
                            }
                                //alert("El registro que buscas si existe!");
                        }

                        if(EXISTE == true)
                        {
                            alert("El registro que buscas si existe!");
                        }
                        else
                        {
                            alert("Lo sentimos el registro que buscas no existe :S");
                        }

                        /*Recorremos todas las filas con contenido de la tabla
                        var tableReg = document.getElementById("myTable");
			            for (var i = 1; i < tableReg.rows.length; i++)
			            {
				            var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
				            Recorremos todas las celdas
				            for (var j = 0; j < cellsOfRow.length; j++)
				            {
					            var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                                alert(compareWith);
                            }
                        }*/
                    }
                    else
                    {
                        alert("Es necesario colocar un valor en ID, para poder realizar la consulta.");
                    }
                }
                else
                {
                    alert("El valor colocado en ID, no corresponde a un valor entero!");
                }
            break;
            case 'btn_Modificar':
                alert('boton modificar, MASCOTAS');
            break;
        }
    });
});