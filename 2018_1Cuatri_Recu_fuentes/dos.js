function mostrar()
//{
  //  var nombre, localidad;
  //  nombre= document.getElementById ("elNombre").value;
  //  localidad= document.getElementById ("laLocalidad").value;
  //  alert("su nombre es  " +nombre+ " y su localidad es " +localidad);
//}
{
    var compra
    var descuento
    var IVA

    compra= document.getElementById("elNombre").value;
    comprta= parseInt(compra);

    descuento= compra*10/100;

    IVA= compra + descuento*21/100;
    
    alert("tu compra es de $"+ compra+ " tenes un descuento de 10% queda en $"+ descuento+ " con la suma del IVA $"+ IVA);
}
