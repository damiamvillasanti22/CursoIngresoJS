function Mostrar()
{
	var edad=document.getElemenById("edad").value;
	var estadoCivil=document.getElemenById("estadoCivil").value;
	if (edad < 18 && estadoCivil != "soltero"){
		alert("es muy pequeño para no ser soltero");
	}
//tomo la edad  

	


}//FIN DE LA FUNCIÓN