//Math.floor redondeo hacia abajo
//Math.ceil redondeo hacia arriba
//Math.random genera un numero de 0,001 a 0,999 en forma de porcentaje
var lienzo = document.getElementById("granjita");
var papel = lienzo.getContext("2d");

var fondo = {
  url:"tile.png",
  cargaOK: false
}
var cantidadv = aleatorio(5,25);
var cantidadc = aleatorio(5, 25);
var cantidadp = aleatorio(5, 25);

fondo.imagen = new Image(); //cargar imagen paso 2
fondo.imagen.src = fondo.url; //cargar imagen paso 3;
fondo.imagen.addEventListener("load",cargarFondo); //se agrega un eventListener en el evento load y se ejecuta la función dibujar

var vaca = {
  url: "vaca.png", //direccion de la vaca
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo ={
  url: "pollo.png",
  cargaOK: false
}

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
}

document.addEventListener("keydown", dibujarTeclado)

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK) //se puede saltear el true
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    console.log(cantidadv);
    for(var v = 0; v < cantidadv; v++)
    {
      var x = aleatorio(0,7);
      var y = aleatorio(0,7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    console.log(cantidadc);
    for(var c = 0; c < cantidadc; c++)
    {
      var xc = aleatorio(0,7);
      var yc = aleatorio(0,7);
      var xc = xc * 60;
      var yc = yc * 60;
      papel.drawImage(cerdo.imagen, xc, yc);
    }
  }
  if(pollo.cargaOK)
  {
    console.log(cantidadp);
    for(var p = 0; p < cantidadp; p++)
    {
      var xp = aleatorio(0,7);
      var yp = aleatorio(0,7);
      var xp = xp * 60;
      var yp = yp * 60;
      papel.drawImage(pollo.imagen, xp, yp);
    }
  }
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random()*(max - min + 1)) + min; //ecuacion magica que convierte el porcentaje de random en un valor entre los intervalos max y min
  return resultado;
}

function dibujarTeclado(evento)
{
  var movimiento = 10;
  var x = 250;
  var y = 250;
  switch (evento.keyCode) {
    case teclas.UP:
      papel.drawImage(cerdo.imagen, x, y - movimiento);
      y = y - movimiento;
      break;

    case teclas.DOWN:
      papel.drawImage(cerdo.imagen, x, y + movimiento);
      y = y + movimiento;
      break;

    case teclas.LEFT:
      papel.drawImage(cerdo.imagen, x - movimiento, y);
      x = x - movimiento;
      break;

    case teclas.RIGHT:
      papel.drawImage(cerdo.imagen, x + movimiento, y);
      x = x + movimiento;
      break;

    default:
      console.log("Otra tecla");
  }
}
