function Mostrar()
{
	var numero;

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta=true;
	while(confirm("numero"))
	{
		numero=prompt("numero");
		numero=parseInt(numero);
		if(numero>= 0){
			positivo+=numero;
		}
			else{
				negativo*=numero;
			}
			alert("numero");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN