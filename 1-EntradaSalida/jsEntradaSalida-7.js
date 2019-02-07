/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var m
    m=parseInt(document.getElementById("numeroUno").value) + parseInt(document.getElementById("numeroDos").value)
    alert("su resultado es "+m)
}

function restar()
{
    var m
    m=parseInt(document.getElementById("numeroUno").value) - parseInt(document.getElementById("numeroDos").value)
    alert("su resultado es "+m)
}

function multiplicar()
{ 
    var m
    m=parseInt(document.getElementById("numeroUno").value) * parseInt(document.getElementById("numeroDos").value)
    alert("su resultado es "+m)
}

function dividir()
{
    var m
    m=parseInt(document.getElementById("numeroUno").value) / parseInt(document.getElementById("numeroDos").value)
    alert("su resultado es "+m)
}

