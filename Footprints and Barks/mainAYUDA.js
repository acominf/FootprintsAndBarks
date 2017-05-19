$(document).ready(function(){
    $('button').click(function(){
        var $btn = $(this);
        var cadena = $btn.text();
        console.log(cadena);
        console.log(this.id);
        //switch(cadena)
        switch(this.id)
        {
            case 'btn_Agregar':
                alert('boton agregar, AYUDANTES');
            break;
            case 'btn_Eliminar':
                alert('boton eliminar, AYUDANTES');
            break;
            case 'btn_Consultar':
                alert('boton consultar, AYUDANTES');
            break;
            case 'btn_Modificar':
                alert('boton modificar, AYUDANTES');
            break;
        }
    });
});