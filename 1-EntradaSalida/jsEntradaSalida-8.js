/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var t
    t=parseInt(document.getElementById("numeroDividendo").value) % parseInt(document.getElementById("numeroDivisor").value)
    alert("el resto es "+t);
}
