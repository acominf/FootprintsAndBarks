$(document).ready(function(){
    var ARR_ID = [];
    var txt = 0;
    $('tr').click(function(){
        var $x = $(this);
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
                var table = document.getElementById("myTable");
                {
                    var valor0 = document.getElementById("id").value;
                    var valor1 = document.getElementById("nombre").value;
                    var valor2 = document.getElementById("fec_nac").value;
                    var valor3 = document.getElementById("domicilio").value;
                    var valor4 = document.getElementById("colonia").value;
                    var valor5 = document.getElementById("municipio").value;
                    var valor6 = document.getElementById("telefono").value;
                    var valor7 = document.getElementById("ing_men").value;
                    var valor8 = document.getElementById("ocupacion").value;
                    var valor9 = document.getElementById("id_mascota").value;

                    if(valor0.trim() != "" && valor1.trim() != "" && valor2.trim() != "" && valor3.trim() != "" && valor4.trim() != "" && valor5.trim() != ""  && valor6.trim() != "" && valor7.trim() != "" && valor8.trim() != "" && valor9.trim() != "") 
                    {
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
                        var cell8 = row.insertCell(8);
                        var cell9 = row.insertCell(9);
                        var cell10 = row.insertCell(10);

                        cell0.innerHTML = '<td><div class="checkbox"><label><input type="checkbox" name=""id="check_Dogs"></label></div></td>';
                        cell1.innerHTML = '<td>'+valor0+'</td>';
                        cell2.innerHTML = '<td>'+valor1+'</td>';
                        cell3.innerHTML = '<td>'+valor2+'</td>';
                        cell4.innerHTML = '<td>'+valor3+'</td>';
                        cell5.innerHTML = '<td>'+valor4+'</td>';
                        cell6.innerHTML = '<td>'+valor5+'</td>';
                        cell7.innerHTML = '<td>'+valor6+'</td>';
                        cell8.innerHTML = '<td>'+valor7+'</td>';
                        cell9.innerHTML = '<td>'+valor8+'</td>';
                        cell10.innerHTML = '<td>'+valor9+'</td>';
                    
                        //Limpiar las textBox
                        document.getElementById("id").value = "";
                        document.getElementById("nombre").value = "";
                        document.getElementById("fec_nac").value = "";
                        document.getElementById("domicilio").value = "";
                        document.getElementById("colonia").value = "";
                        document.getElementById("municipio").value = "";
                        document.getElementById("telefono").value = "";
                        document.getElementById("ing_men").value = "";
                        document.getElementById("ocupacion").value = "";
                        document.getElementById("id_mascota").value = "";    
                    }
                    else
                    {
                        alert("Faltan datos para completar el registro!");
                    }
                }
            break;
            case 'btn_Eliminar':
                if(txt != 0)
                {
                    document.getElementById("myTable").deleteRow(txt);
                }
                else
                {
                    alert("La fila: " +  txt + " no puede ser eliminada.");
                }
            break;
            case 'btn_Consultar':
                var yea = document.getElementById("myTable").rows.length;
                var valor0 = document.getElementById("id").value;
                if(isNaN(valor0) == false)
                {
                    if(valor0.trim() != "")
                    {
                        confirm("Buscar por ID, con valor: " + valor0 + ".");
                        var tableReg = document.getElementById("myTable");
			            for (var i = 1; i < tableReg.rows.length; i++)
			            {
				            var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
                            var compareWith = cellsOfRow[1].innerHTML.toLowerCase();
                            ARR_ID.push(compareWith);
                        }
                        var EXISTE = false;
                        for(var j = 0; j < ARR_ID.length; j++)
                        {
                            var elementoArr = ARR_ID[j];
                            var convertion =  parseInt(elementoArr);
                            if(valor0 == convertion)
                            {
                                EXISTE = true;
                                break;
                            }
                        }
                        if(EXISTE == true)
                            alert("El registro que buscas si existe!");
                        else
                            alert("Lo sentimos el registro que buscas no existe :S");
                    }
                    else
                        alert("Es necesario colocar un valor en ID, para poder realizar la consulta.");
                }
                else
                    alert("El valor colocado en ID, no corresponde a un valor entero!");
            break;
            case 'btn_Modificar':
                alert('boton modificar, AMOS');
            break;
        }
    });
});