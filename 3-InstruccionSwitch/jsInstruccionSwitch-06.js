function mostrar()
{
	var hora;
	var mensaje;


	hora= document.getElementById("txtIdHora").value;
	hora= parseInt(hora);

	if(hora>=7 && hora <=11)
	{
		alert("Es de mañana.");
	}
	else if (hora>=12 && hora <= 19)
	{
		alert("Es de tarde.");
	}
		
	 else if
	 ( (hora>=20 && hora <=24) || (hora >=0 && hora <=6))
	{
		alert("Es de noche");
	}
	else	
	{
		alert("Esa no es una hora valida.")
	}
	
	   

/*	switch(hora)
	{
			case hora=7:
			case hora=8:
			case hora=9:
			case hora=10:
			case hora=11:	
			mensaje="Es de mañana";
			break;
			case hora=12:
			case hora=13:
			case hora=14:
			case hora=15:
			case hora=16:
			case hora=17:
			case hora=18:
			case hora=19:		
			mensaje="Es de tarde.";
			break;
			case hora=20:
			case hora=21:
			case hora=22:
			case hora=23:
			case hora=24:
			case hora=0:
			case hora=1:
			case hora=2:
			case hora=3:
			case hora=4:
			case hora=5:
			case hora=6:
			mensaje="Es de noche.";
			break;
			default:
			mensaje="La hora no existe";		
	}
alert(mensaje);
*/
}//FIN DE LA FUNCIÓN