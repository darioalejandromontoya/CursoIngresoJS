/*Montoya Dario Alejandro
DIV H
ejercicio 10

*/
function mostrar()
{

var nota;
nota= Math.round(Math.random()*9+1);

    if(nota>=9)
    {
        alert("Excelente Nota: " + nota);
    }
    else
    {
        if(nota>=4)
        {
            alert("Aprobo nota; "+nota);
        }
        else
        {
            alert("Vamos la proxima se puede: "+nota);
        }
    }
}//FIN DE LA FUNCIÓN