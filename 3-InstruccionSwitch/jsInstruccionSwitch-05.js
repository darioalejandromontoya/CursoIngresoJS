function mostrar()
{
	//"txtIdHora"
	var hora;
	var mensaje;

	hora= document.getElementById("txtIdHora").value;
	hora= parseInt(hora);

	switch(hora)
	{
		case hora=7:
		case hora=8:
		case hora=9:
		case hora=10:
			mensaje="Es de mañana.";
			break;	
	}
	alert(mensaje);
	



}//FIN DE LA FUNCIÓN