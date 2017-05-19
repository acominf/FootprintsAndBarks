$(document).ready(function(){
    $('#div1').mouseenter(function(){
        $('#div1').fadeTo('medium',0.5);
    });
    $('#div1').mouseleave(function(){
        $('#div1').fadeTo('fast',1.0);
    });

    $('#div2').mouseenter(function(){
        $('#div2').fadeTo('medium',0.5);
    });
    $('#div2').mouseleave(function(){
        $('#div2').fadeTo('fast',1.0);
    });

    $('#div3').mouseenter(function(){
        $('#div3').fadeTo('medium',0.5);
    });
    $('#div3').mouseleave(function(){
        $('#div3').fadeTo('fast',1.0);
    });

    $('#div4').mouseenter(function(){
        $('#div4').fadeTo('medium',0.5);
    });
    $('#div4').mouseleave(function(){
        $('#div4').fadeTo('fast',1.0);
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
                alert('boton agregar');
            break;
            case 'btn_Eliminar':
                alert('boton eliminar');
            break;
            case 'btn_Consultar':
                alert('boton consultar');
            break;
            case 'btn_Modificar':
                alert('boton modificar');
            break;
        }
    });

    /*$('#btn_Agregar').click(function(){
            alert('Boton agregar');
    });
    
    $('#btn_Eliminar').click(function(){
            alert('Boton eliminar');
    });
    $('#btn_Consultar').click(function(){
            alert('Boton consultar');
    });
    $('#btn_Modificar').click(function(){
            alert('Boton modificar');
    });*/

    /*$('#div1').click(function(){
        $("#div1").append("<a href = 'Contrato1.pdf' target = '_blank'> Reglas para adoptar una mascota </a>");
    });*/
});