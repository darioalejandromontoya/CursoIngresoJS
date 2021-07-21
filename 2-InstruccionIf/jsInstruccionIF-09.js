/*Montoya Dario Alejandro
DIV H
ejercicio 09

*/
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var minimo;
	var maximo;

	minimo= 1;
	maximo= 10;
		
	//Math.round: redondea el resultado.
	numero=Math.round(Math.random()*(maximo - minimo)+ minimo);
	alert(numero);

}//FIN DE LA FUNCIÓN Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive

