var d = document.getElementById("Draw");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var Xmin = 0;
var Ymin = 0;

var Xmax = 300;
var Ymax = 300;
var Xinit = 10;
var Yinit = 10;
while(l < lineas)
{
  for(var i = 0; i < 300; i++)
  {
    dibujarLinea("white",Xmin,Ymin+i,Xinit+i,Ymax);
    dibujarLinea("pink",Xmin,Ymax-i,Xinit+i,Ymin);
    dibujarLinea("yellow",Xmax,Ymin+i,Xinit+i,Ymin);
    dibujarLinea("gray",Xmax,Ymax-i,Xinit+i,Ymax);
    l = l+1;
    i = i+10;
  }
}
Circulo("white",150,150,75,0,360,false, "white");
Circulo("orange",150,150,50,0,360,false, "orange");
Circulo("green",150,150,25,0,360,false, "green");
function dibujarLinea(color, Xinicial, Yinicial, Xfinal, Yfinal)
{
  lienzo.beginPath(); //Comienza el trazo
  lienzo.strokeStyle = color; //Color del trazo
  lienzo.moveTo(Xinicial,Yinicial); //Comienzo del trazo (X,Y)
  lienzo.lineTo(Xfinal,Yfinal); //Tipo de trazo y punto Final (X,Y)
  lienzo.stroke(); //Dibujar (Propiedad del Lienzo)
  lienzo.closePath(); //Terminar de Dibujar
}
function Circulo(color, Xinicial, Yinicial, radio, angulo_partida,angulo_final, valor, relleno)
{
  angulo_partida = (Math.PI/180)*angulo_partida;
  angulo_final = (Math.PI/180)*angulo_final;
  lienzo.fillStyle = relleno;
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.arc(Xinicial,Yinicial,radio, angulo_partida, angulo_final, false);
  lienzo.stroke();
  lienzo.closePath();
  lienzo.fill();
}
