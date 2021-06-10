var texto = document.getElementById("Texto_Lineas");
var boton = document.getElementById("Boton");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("formulario");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value); //valor de la caja de texto y conversión de string a Int
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;
  for(l = 0; l < lineas; l++)//Variable integradora, condición para que se ejecute y instrucción cuando cada ciclo es completado
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito, 1,1,1,ancho - 1);
  dibujarLinea(colorcito, 1,ancho -1,ancho - 1,ancho -1);
}
