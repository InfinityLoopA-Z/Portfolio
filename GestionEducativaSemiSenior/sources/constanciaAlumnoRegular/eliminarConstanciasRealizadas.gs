/*Cuando se crea un formulario de google, el codigo se ejecuta segun la base de datos del mismo, creando así n copias 
de las constancias ya creadas con anterioridad. Para corregir eso, esta función se encarga de eliminar las solicitudes
una vez realizadas, permitiendo así tener una base de datos limpia.
Nota: Las respuestas aún quedan almacenadas en las opciones de google forms, así que en el caso de que sea necesario hacer
una revisión exaustiva, es posible crear una nueva hoja de calculos o simplemente verificar en los datos almacenados en google forms
*/

function eliminarConstanciasRealizadas() 
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var values = sheet.getDataRange().getValues();
  var lastRow = SpreadsheetApp.getActiveSheet().getLastRow(); //se obtiene el valor de la ultima columna

    
  for(var i=lastRow; i >0;i--) //se hace un contador inverso, que cuenta desde la ultima fila hasta las preguntas, eliminando a todas las filas no nulas, si la ultima fila son la de las preguntas, esto no se ejecuta, enviando un error que solo se produce si esta parte del codigo se ejecuta sin existir respuesta, lo cual es imposible, ya que todo el código se ejecutará cuando se reciba una respuesta.
  {
    if(typeof values[i] != "undefined" || typeof values[i] != "null")
    {
      sheet.deleteRow(i);
    }
  }
}