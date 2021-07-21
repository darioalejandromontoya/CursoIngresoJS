function mostrar()
{
	var mes;
	var mensaje;

	mes= document.getElementById("txtIdMes").value;

	switch(mes)
	{
			case "Febrero":
			mensaje="Si tiene 28 dias.";
			break;

			case "Abril":
			case "Junio":
			case "Septiembre":
			case "Noviembre":
			mensaje="Si tiene 30 dias.";
			break;
			default:
			mensaje="Si tiene 31 dias";	

	}
			
alert(mensaje);


}//FIN DE LA FUNCIÓN