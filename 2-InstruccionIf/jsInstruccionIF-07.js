/*Montoya Dario Alejandro
DIV H
ejercicio 07

*/
function mostrar()
{
	//"estadoCivil"
	var edad;
	var estadoCivil;

	estadoCivil= document.getElementById("estadoCivil").value;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad <18 && estadoCivil != "Soltero")
	{
		alert("Es muy pequeño para no ser soltero");

	}
	

	
}
/*Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero", mostrar el siguiente mensaje:
  'Es muy pequeño para NO ser soltero.'*/