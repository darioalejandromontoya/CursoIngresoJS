/*Montoya Dario Alejandro
DIV H
ejercicio 06
*/
function mostrar()
{
	var edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	if(edad <13)
	{
		alert("Usted es un niño");
	}
	else
	{
			if (edad >=13 && edad<=17)
		{
			alert("Usted es adolescente");
		}
			else
	    {
		alert("Usted es adulto");
	    }

	}		
}//fin de la funcion