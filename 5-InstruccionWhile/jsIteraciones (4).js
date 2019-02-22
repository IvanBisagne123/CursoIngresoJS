function mostrar()
{
	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero>10 || numero<0)
	{
		numero= prompt("error, ingrese correctamente el numero");
	}
	alert(numero);
}