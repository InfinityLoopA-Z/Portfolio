/*Este script permite hacer un Fix en las fechas, ya que, además de estar en ingles, presentan un problema con el reloj,porque estas
estan en el uso horario GTM - 5 y todas se guardan a las 22:00 hs del dia anterior, para ello, se las "fixea", sumandole un día más al día 
obtenido y se hace un diccionarío para traducirlas al español */
var diafix = 0;
var mes = "";
var year = "";

function fixearFechas(fecha)
{
  var fechaSinArreglar = String(fecha).split(" "); //cortar las fechas para almacenarlas en Arrays
  mes = fechaSinArreglar[1]; //asignar a la variable global mes el valor 1 del array
  var dia = fechaSinArreglar[2];
  year = fechaSinArreglar[3];
  diafix = parseInt(dia) + 1; //convertir a entero el string y sumarle uno para arreglarla
  var fechaCompleta = String(diafix+"/"+ mes +"/"+ year);

  switch(mes)
  {
    case "Jan":
      mes = "Enero";
      break;

    case "Feb":
      mes = "Febrero";
      break;

    case "Mar":
      mes = "Marzo";
      break;

    case "Apr":
      mes = "Abril";
      break;

    case "May":
      mes = "Mayo";
      break;

    case "Jun":
      mes="Junio";
      break;

    case "Jul":
      mes = "Julio";
      break;
    
    case "Aug":
      mes = "Agosto";
      break;
    
    case "Sep":
      mes = "Septiembre";
      break;

    case "Oct":
      mes = "Octubre";
      break;

    case "Nov":
      mes = "Noviembre";
      break;

    case "Dec":
      mes = "Diciembre";
      break;

    default:
      mes = mes;
      break;

  }
  Logger.log("La fecha arreglada es: " + diafix + "/" + mes + "/" + year); //Fecha reparada
  var fechafixeada = String(diafix + "/" + mes + "/" + year);
  return fechafixeada;
  }