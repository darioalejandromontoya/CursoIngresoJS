function mostrar()
{
	var mes;
	var mensaje;

	mes= document.getElementById("txtIdMes").value;

	switch(mes)
	{
			
			case"Marzo":
			case "Abril":
			case "Mayo":
			case "Junio":
				mensaje="Falta para el invierno.";
				break;
			case "Julio":
			case "Agosto":
				mensaje="Abrigate que hace frio.";
				break;
			default:
				mensaje="Ya pasamos el fio, ahora calor!!!";
				break;
							
				
	}

	alert(mensaje);





}//FIN DE LA FUNCIÓN