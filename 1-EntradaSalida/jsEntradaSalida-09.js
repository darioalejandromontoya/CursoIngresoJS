/*Dario Alejandro Montoya
Div "H"
ejercicio 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
*/
function mostrarAumento()
{   //"txtIdSueldo"
	//"txtIdResultado"
	//para calcular el nuevo sueldo deberia sumarle al sueldo actual el aumento
	//el calculo de porcentaje de un valor lo consigo multiplicando el valor por el porcentaje y lo divido por 100
var sueldo;
var nuevoSueldo;
var aumento;

sueldo= document.getElementById("txtIdSueldo").value;
sueldo=  parseInt(sueldo);
aumento= sueldo * 10 / 100;
nuevoSueldo= sueldo + aumento;
document.getElementById("txtIdResultado").value= nuevoSueldo;

}
