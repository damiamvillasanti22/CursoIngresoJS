function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5){
		contador++;
	numero=prompt("numero");
	numero=parseInt(numero);
	acumulador+=numero;
}
	alert(acumulador);
	alert(acumulador/contador);

}//FIN DE LA FUNCIÓN