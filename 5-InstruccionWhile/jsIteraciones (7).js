function Mostrar()
{
	var numero

	var contador=0;
	var acumulador=0;
	var respuesta=true;
	while(respuesta){
		contador++;
		numero=prompt("numuro");
		numero=parseInt(numero);
		acumulador+=numero;
		respuesta=confirm("numero")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN