/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{	
    var precio;
    var precio2;
    var precio3;
    var sumar;
    var Promedio;
    var precio_final;

    precio= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);

    sumar= precio+precio2+precio3;

    alert(sumar);

}
function Promedio ()
{
    precio= parseInt(document.getElementById("PrecioUno").value);
    precio2= parseInt(document.getElementById("PrecioDos").value);
    precio3= parseInt(document.getElementById("PrecioTres").value);

    Promedio= (precio+precio2+precio3)/3;

    alert(Promedio);

}
function PrecioFinal () 
{
    sumar= precio+precio2+precio3;
    precio_final=sumar+(21/100*sumar);

    alert(precio_final);
}