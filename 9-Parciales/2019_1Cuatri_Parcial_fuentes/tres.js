/* Dario Alejandro Montoya
Div "H"
Ejercicio 3 P19
*/
function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var precioFinal;
    var nuevoPrecio

    precio= prompt("Ingrese precio");
    precio=parseInt(precio);
    porcentajeDescuento=prompt ("Ingrese porcentaje de descuento");
    porcentajeDescuento=parseInt(porcentajeDescuento);
    precioFinal= precio * porcentajeDescuento /100;
    nuevoPrecio= precio - porcentajeDescuento;
    document.getElementById("elPrecioFinal").value=nuevoPrecio;

    


  
    

}
