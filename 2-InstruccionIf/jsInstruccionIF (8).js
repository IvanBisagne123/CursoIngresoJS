function mostrar()
{
//tomo la edad  

var edad
var estado_civil

edad= document.getElementById("edad").value;
estado_civil= document.getElementById("estadoCivil").value;

if(edad >18 && estado_civil== "Soltero")
{
    alert("sos soltero y sos mayor que triste");
}


}//FIN DE LA FUNCIÓN