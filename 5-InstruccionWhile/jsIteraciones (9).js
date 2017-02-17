function Mostrar()
{

	var numero;
	var primera=true;
	// declarar variables
	var maximo;
	var minimo;

	while(confirm("numero"))
	{
		numero=prompt("numero");
		numero=parseInt(numero);
		if(primera)
		{
			primera=false;
			maximo=numero;
			minimo=minimo;

		}
		else
		{
			if(numero > maximo){
				maximo=numero;
			}
			if(numero < minimo){
				minimo=numero;
			}
		}
		
	
	}




}//FIN DE LA FUNCIÓN