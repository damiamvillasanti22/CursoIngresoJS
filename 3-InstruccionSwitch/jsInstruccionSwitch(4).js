function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
	case "Febrero":
		alert("28");
		break;
	case "Abril":
	case "Junio":
	case "septiembre":
	case "Nobiembre":
		alert("30");
		break;
	default:
		alert("31");
}


	
	



}//FIN DE LA FUNCIÓN