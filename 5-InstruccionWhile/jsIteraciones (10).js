//declarar contadores y variables 
function mostrar()
{
	var contador;
	var sumaDeNegativos;
	var sumaDePositivos;
	var numero;
	var cantDePositivos;
	var cantDeNegativos;
	var cantDePares;
	
	
	contador=0;
	sumaDeNegativos=0;
	sumaDePositivos=0;

	respuesta='si';
	
	while(respuesta!='no')
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		
		if(numero==0)
		{
			numero++;
		}else{

			(numero<0)
			
				sumaDeNegativos=sumaDeNegativos+numero;
				cantDeNegativos++;
			}if(numero>0)
			{
				sumaDePositivos=sumaDePositivos+numero;
				cantDePositivos++;
			}
		}
		if(numero%2==0)
		{
			cantDePares=cantDePares+numero;
			cantDePares++
		}		
		respuesta=prompt("ingrese no para salir");
	}
	
	console.log("la suma de los negativos es "+sumaDeNegativos);
	console.log("la suma de los positivos es "+ sumaDePositivos);




}//FIN DE LA FUNCIÓN