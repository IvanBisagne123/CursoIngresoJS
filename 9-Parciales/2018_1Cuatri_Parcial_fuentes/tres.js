function mostrar()
{
    var precio;
    var descuento;
    var porsentaje_descuento;
    var precio_final;
    
    precio= prompt ("Ingrese el precio");
    precio= parseInt (precio);
    
    porcentaje_descuento= prompt ("Ingrese el porsentaje de descuento");
    porsentaje_descuento= parseInt (porsentaje_descuento);

    descuento= porsentaje_descuento *precio /100;
    alert("el porsentaje del descuento es " + descuento);

    precio_final= precio - descuento;
    alert("el precio con el descuento  es " +precio_final);
}    