/* Dario Alejandro Montoya
Div "H"
Ejercicio 2 P19
*/
function mostrar()
{
    var nombreParejaUno;
    var nombreParejaDos;
    var pesoParejaUno;
    var pesoParejaDos;
    var pesoTotal;
    var promedio;

    nombreParejaUno= prompt("Ingrese su nombre");
    nombreParejaDos= prompt("Ingrese su nombre");
    pesoParejaUno= prompt ("Ingrese su peso");
    pesoParejaUno= parseInt(pesoParejaUno);
    pesoParejaDos= prompt("Ingrese su peso")
    pesoParejaDos= parseInt(pesoParejaDos);
    pesoTotal= pesoParejaUno + pesoParejaDos;
    promedio= pesoTotal /2;



    alert("Ustedes se llaman " + nombreParejaUno + " y " +nombreParejaDos+ ", pesan " +pesoParejaUno+ " y " +pesoParejaDos+ " kilos, que sumados son " + pesoTotal+ " kilos y el promedio de peso es " + promedio);

      

}
