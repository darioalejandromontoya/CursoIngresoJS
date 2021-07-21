/*Montoya Dario
Div H
TP04



TP04
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5 bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.  

 function CalcularPrecio() 
 {
     var cantidadLamparas;
     var marca;
     var precioFinal;
     var precioConDescuento;
     var iibb;
     var impuesto;
     const PRECIO_LAMPARA= 35;
     const PORCENTAJE_IIBB= 0.10;

     cantidadLamparas= document.getElementById("txtIdCantidad").value;
     cantidadLamparas=parseInt(cantidadLamparas);
     marca=document.getElementById("Marca").value;

     if(cantidadLamparas>6){
         descuento=0.50
     }
     else{
         if(cantidadLamparas==5){
             if(marca=="ArgentinaLuz"){
                 descuento=0.40;
             }
             else{
                 descuento=0.30;
             }
         }
         else{
             if(cantidadLamparas==4){
                 if(marca=="ArgentinaLuz" || marca== "FelipeLamparas"){
                     descuento=0.25;
                 }
                 else{
                     descuento=0.20;
                 }
             }
             else
             {
                 if(cantidadLamparas==3)
                 {
                     if(marca=="ArgentinaLuz")
                     {
                         descuento=0.15;
                     }
                     else
                     {
                         if(marca=="FelipeLamparas")
                         {
                             descuento= 0.10;
                         }
                         else
                         {
                             descuento=0.05;
                         }
                     }
                 }
                 else
                 {
                     if(cantidadLamparas<3)
                     {
                         descuento=0;
                     }
                 }
             }
         }
     }
     precioConDescuento = PRECIO_LAMPARA - (PRECIO_LAMPARA * descuento);
     
     document.getElementById("txtIdprecioDescuento").value = precioFinal;
     precioFinal = precioConDescuento * cantidadLamparas;

     if (precioFinal > 120)
     {
         iibb = precioFinal + (precioFinal * PORCENTAJE_IIBB);
         document.getElementById("txtIdprecioDescuento").value = iibb;
         impuesto = iibb - precioFinal;
         alert("IIBB Usted pago " + "$" + impuesto + " de ingresos brutos");
     } 
 

}    


Montoya Dario
Div H
TP04



TP04
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5 bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.  
*/
function CalcularPrecio() 
{
    var cantidadLamparas;
    var marca;
    var precioFinal;
    var precioConDescuento;
    var iibb;
    var impuesto;
    const PRECIO_LAMPARA= 35;
    const PORCENTAJE_IIBB= 0.10;

    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            descuento= 0;
            break;
        case 3:
            if(marca== "ArgentinaLuz")
            {
                descuento=0.15;
            }
            else
            {
                if(marca=="FelipeLamparas")
                {
                    descuento=0.10;
                }
                else
                {
                    descuento=0.05;
                }
            }
            break;
        case 4:
            if(marca=="ArgentinaLuz"|| marca== "FelipeLamparas")
            {
                descuento=25;
            }
            else
            {
                descuento=0.20;
            }
            break;
        case 5:
            if(marca=="ArgentinaLuz")
            {
                descuento= 0.40;
            }
            else
            {
                descuento= 0.30;
            }
            break;
        default:
            
            descuento=0.50; 
               

    }

    precioConDescuento= PRECIO_LAMPARA -  PRECIO_LAMPARA * descuento;
    document.getElementById("txtIdprecioDescuento").value=precioConDescuento
    precioFinal=precioConDescuento*cantidadLamparas;

    if (precioFinal > 120)
     {
         iibb = precioFinal + (precioFinal * PORCENTAJE_IIBB);
         document.getElementById("txtIdprecioDescuento").value = iibb;
         impuesto = iibb - precioFinal;
         alert("IIBB Usted pago " + "$" + impuesto + " de ingresos brutos");
     } 
  


    



}


 




























































