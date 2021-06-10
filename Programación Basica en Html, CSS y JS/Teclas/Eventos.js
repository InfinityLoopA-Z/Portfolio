var teclas =
{
  UP: 38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};//Objetos en JavaScript
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado); //"evento"
var cuadrado = document.getElementById("area_de_dibujo");
var papel = cuadrado.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151,151, papel);

function dibujarTeclado(evento)
{
  var color = "white";
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;

    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;

    case teclas.LEFT:
      dibujarLinea(color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;

    case teclas.RIGHT:
      dibujarLinea(color, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;

    default:
      console.log("Otra tecla");
    break; //innecesario
  }
}

function dibujarLinea(color, Xinicial, Yinicial, Xfinal, Yfinal, lienzo)
{
  lienzo.beginPath(); //Comienza el trazo
  lienzo.strokeStyle = color; //Color del trazo
  lienzo.lineWidth = 3;
  lienzo.moveTo(Xinicial,Yinicial); //Comienzo del trazo (X,Y)
  lienzo.lineTo(Xfinal,Yfinal); //Tipo de trazo y punto Final (X,Y)
  lienzo.stroke(); //Dibujar (Propiedad del Lienzo)
  lienzo.closePath(); //Terminar de Dibujar
}
