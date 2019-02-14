function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var RANDOM
	RANDOM= Math.floor((Math.random()*10)+1);
	if(RANDOM >=9)
	{
		alert("exelente");
	}
	if(RANDOM >=4 && RANDOM <=8)
	{
		alert("aprobado");
	}
	if(RANDOM <4)
	{
		alert("suerte para la proxima");
	}

}//FIN DE LA FUNCIÓN