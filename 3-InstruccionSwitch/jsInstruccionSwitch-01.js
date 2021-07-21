/*Dario Alejandro Montoya
Div H
Ejercicio 01

*/
function mostrar()
{
	//tomo el mes
	var mes;
	var mensaje;

	mes= document.getElementById("txtIdMes").value;

	switch(mes)
	{   case "Enero":
		mensaje="Que comiences bien el año";
		break;
		case "Marzo":
		mensaje="A clases";
		break;
		case "Julio":
		mensaje="Se vienen las vacaciones";
		break;
		case "Diciembre":
		mensaje="Felices Fiestas";
		break;
		default:
			mensaje="En este mes no hay nada especial";
    }
	alert(mensaje);
}//FIN DE LA FUNCIÓN