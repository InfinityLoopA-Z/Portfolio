var sheetBD = SpreadsheetApp.getActiveSpreadsheet()
var dataBD = sheetBD.getDataRange().getValues()
var arrayCursos = []
var arrayNombresCompletos = []
var arrayGrupos = []
var arrayCorreos = []
var arrayFechaNacimiento =[]
var arrayDni = []
var i
function actualizarDSIMA()
{
  for(i = 1; i<dataBD.length;i++)
  {
    arrayCursos.push(dataBD[i][0])
    arrayGrupos.push(dataBD[i][1])
    arrayCorreos.push(dataBD[i][2])
    arrayFechaNacimiento.push(dataBD[i][5])
    arrayDni.push(dataBD[i][6])
    arrayNombresCompletos.push(dataBD[i][33])
  }
  
  for(var j = 0;j<arrayNombresCompletos.length;j++)
  {
    if(arrayCursos[j] != "1°A" && arrayCursos[j] != "1°B" &&arrayCursos[j] != "1°C" && arrayCursos[j] != "1°D" && arrayCursos[j] != "1°E" && arrayCursos[j] != "1°F" && arrayCursos[j] != "")
    {
      if(arrayDni[j] ==  "")
      {
        Logger.log("El alumno: "+arrayNombresCompletos[j] + " no posee dni")
        enviarDatos(arrayNombresCompletos[j])
      }
      else if(arrayDni[j] != "" && arrayFechaNacimiento[j] == "")
      {
        Logger.log("El alumno: "+ arrayNombresCompletos[j]+" posee dni, pero necesita actualizar datos")
        enviarDatos(arrayNombresCompletos[j])
      }
      else
      {
        Logger.log("El alumno: "+arrayNombresCompletos[j]+ " tiene todos los datos actualizados")
      }
    }
  }
}

function enviarDatos(datosR)
{
  var sheetSima = SpreadsheetApp.openByUrl("unUrl")
  var dataSima = sheetSima.getDataRange().getValues()
  var filafix= i+1
  var arrayDniSima = []
  var arrayNombresCompletoSima = []
  var arrayFechaNacimientoSima = []
  var arrayLocalidadSima = []
  var arrayDomiciliosSima = []
  var arrayTelefonoSima = []

  for(var j = 1; j<dataSima.length;j++)
  {
    arrayDniSima.push(dataSima[j][3])
    arrayNombresCompletoSima.push(dataSima[j][4])
    arrayFechaNacimientoSima.push(dataSima[j][7])
    arrayLocalidadSima.push(dataSima[j][8])
    arrayDomiciliosSima.push(dataSima[j][9])
    arrayTelefonoSima.push(dataSima[j][10])
  }

  for(var h = 0; h<arrayNombresCompletoSima.length;h++)
  {
    if(arrayNombresCompletoSima[h] ==  datosR)
    {
      Logger.log("Se van a agregar datos en la fila: "+filafix+  " del alumno: "+arrayNombresCompletoSima[h])
      //*
      sheetBD.getRange(String("G"+filafix)).setValue(arrayDniSima[h]).setBackground("#AF7AC5")
      sheetBD.getRange(String("F"+filafix)).setValue(arrayFechaNacimientoSima[h]).setBackground("#AF7AC5")
      sheetBD.getRange(String("H"+filafix)).setValue(arrayDomiciliosSima[h]).setBackground("#AF7AC5")
      sheetBD.getRange(String("I"+filafix)).setValue(arrayLocalidadSima[h]).setBackground("#AF7AC5")
      sheetBD.getRange(String("K"+filafix)).setValue(arrayTelefonoSima[h]).setBackground("#AF7AC5")//*/
    }
  }
}