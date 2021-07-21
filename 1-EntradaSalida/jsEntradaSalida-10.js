/*Dario Alejandro Montoya
Div "H"
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
function mostrardescuento()

{ 
	var importe;
	var importeFinal;
	var descuento;

	importe= document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);
	descuento= importe * 25 / 100;
	nuevoImporte= importe - descuento;

	document.getElementById("txtIdResultado").value= importeFinal;
}	
*/
{
	var importe;
	var importeFinal;
	var descuento;
	var porcentaje;
	importe= document.getElementById("txtIdImporte").value;
	importe=parseInt(importe);
	porcentaje= prompt ("Ingrese descuento");
	porcentaje=parseInt(porcentaje);
	descuento= importe * porcentaje /100;
	importeFinal= importe - descuento;

	document.getElementById("txtIdResultado").value= importeFinal;
	
	



}


