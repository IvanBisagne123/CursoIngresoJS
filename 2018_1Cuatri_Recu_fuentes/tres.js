function mostrar()
{
    var amigos;
    var total;
    var precio;
    var propina;
    var IVA;

    amigos= prompt("cantidad de personas");
    amigos= parseInt(amigos);
    
    total= prompt("total")
    total= parseInt(total);

    precio= total/amigos;
    
    propina= (precio*10/100)+precio;

    IVA= (propina*21/100)+precio;
    
    alert("pagaron en total $"+ precio+ " cada uno, mas la propina del 10% son $"+ propina +" con el iva es $"+ IVA);

}