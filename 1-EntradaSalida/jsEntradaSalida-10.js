/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var Importe
    var Resultado
    var Descuento

    Importe= document.getElementById("importe").nodeValue;
    Importe= parseInt(Importe)
    Descuento= Importe*0.25
    Resultado= Importe-Descuento
    document.getElementById("resultado").value=Resultado;
}
