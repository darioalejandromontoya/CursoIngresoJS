/*Dario Alejandro Montoya
Div "H"
ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	//"txtIdNumeroUno"
	//"txtIdNumeroDos"
	var num1;
	var num2;
	var resultado;
	num1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 =parseInt(document.getElementById("txtIdNumeroDos").value); 
	resultado= num1 + num2
	alert("La suma es " + resultado);

}


function restar()
{
	var num1;
	var num2;
	var resultado;
	num1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 =parseInt(document.getElementById("txtIdNumeroDos").value); 
	resultado= num1 - num2
	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	var num1;
	var num2;
	var resultado;
	num1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 =parseInt(document.getElementById("txtIdNumeroDos").value); 
	resultado= num1 * num2
	alert("La multiplicacion es " + resultado);	
}

function dividir()
{
	var num1;
	var num2;
	var resultado;
	num1 =parseInt(document.getElementById("txtIdNumeroUno").value);
	num2 =parseInt(document.getElementById("txtIdNumeroDos").value); 
	resultado= num1 / num2
	alert("El cociente es " + resultado);		
}

