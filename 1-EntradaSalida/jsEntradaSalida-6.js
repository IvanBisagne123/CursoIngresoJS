/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var m
    m=parseInt(document.getElementById("numeroUno").value) + parseInt(document.getElementById("numeroDos").value)
    alert("su suma es "+m)
}

