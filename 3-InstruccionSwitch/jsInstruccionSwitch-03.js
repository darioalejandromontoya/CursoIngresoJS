function mostrar()
{
	var mes;
	var mensaje;

	mes= document.getElementById("txtIdMes").value;

	switch(mes)
	{
			case "Febrero":
			mensaje="Este mes no tiene mas de 29 dias";
			break;

			default:
			mensaje="Este mes tiene mas de 30 dias";
	}

alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN