function mostrar()
{
//tomo la edad
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño){
  case "Julio":
  case "Agosto":
   alert("abrigate que hace frio");
   break;
   case "Enero":
   case "Febrero":
   case "Marzo":
   case "Abril":
   case "Mayo":
   case "junio":
    alert("falta para invierno");
    break;
    default:
     alert("ahora hace calor");
     break;
}



}//FIN DE LA FUNCIÓN
