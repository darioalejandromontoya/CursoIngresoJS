/*Montoya Dario Alejandro
DIV H
ejercicio 08

*/
function mostrar()
{
	var edad;
	var estadoCivil;

	estadoCivil= document.getElementById("estadoCivil").value;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if(edad >18 && estadoCivil == "Soltero")
    {
		alert("Es soltero y no es menor");
	}



}//FIN DE LA FUNCIÓN
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/