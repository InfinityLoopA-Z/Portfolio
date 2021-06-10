var sheetLista = SpreadsheetApp.getActiveSheet()
var dataLista = sheetLista.getDataRange().getValues()

var arrayGruposBD =[]
var arrayCursosBD = []
var arrayBurbujasBD = []
var arrayNombresCompletosBD = []
var arrayCursosComparar = ["1°A", "1°B","1°C", "1°D", "1°E", "1°F","2°A", "2°B", "2°C", "2°D", "2°E", "2°F",
                    "3°A", "3°B", "3°C", "3°D","4°A", "4°B", "4°C","5°A", "5°B", "5°C","6°A", "6°B", "6°C","7°A", "7°B", "7°C"]

function cargarDatosOP()
{
  limpiarCarpetaOP()
  var sheetBD = SpreadsheetApp.openByUrl("unUrl")
  var dataBD = sheetBD.getDataRange().getValues()
  for(var i = 1; i<dataBD.length;i++)
  {
    arrayCursosBD.push(dataBD[i][0])
    arrayGruposBD.push(dataBD[i][1])
    arrayBurbujasBD.push(dataBD[i][32])
    arrayNombresCompletosBD.push(dataBD[i][33])
  }
  generarListaOP()
}

function generarListaOP()
{
  //Logger.log(arrayNombresCompletosBD[203])
  //Logger.log(arrayNombresCompletosBD.length)
  /**/
  var contadorCursos = 0
  var nombresAlumnos = []
  var grupoAlumnos = []
  var burbujaTaller = []
  var cC = 0;

  while(contadorCursos <= arrayCursosComparar.length)
  {
    for(var j = 0; j<arrayNombresCompletosBD.length;j++)
    {
      var curso = arrayCursosComparar[cC]
      if(arrayCursosComparar[cC] === arrayCursosBD[j])
      {
        nombresAlumnos.push(arrayNombresCompletosBD[j])
        grupoAlumnos.push(arrayGruposBD[j])
        burbujaTaller.push(arrayBurbujasBD[j])
      }
    }
    insertarListaOP(nombresAlumnos, grupoAlumnos, burbujaTaller, curso)
    nombresAlumnos = []
    grupoAlumnos = []
    burbujaTaller = []
    contadorCursos +=1
    cC +=1
  }//*/
}
function insertarListaOP(nombresR, gruposR, burbujaTallerR, cursoR)
{
  var contadorNombres = 0
  var contadorLista = ["1", "2", "3", "4", "5", "6","7"]
  var cantidadAlumnos = contadorLista.concat(nombresR)
  Logger.log("Cantidad: "+cantidadAlumnos.length+"Alumnos de "+cursoR + ": "+nombresR)
  
  for(var h= 7; h<cantidadAlumnos.length; h++)
  {
    sheetLista.getRange(h,2).setValue(gruposR[contadorNombres])
    sheetLista.getRange(h,3).setValue(burbujaTallerR[contadorNombres])
    sheetLista.getRange(h,4).setValue(nombresR[contadorNombres]);
    sheetLista.getRange("G3").setValue(cursoR);
    contadorNombres +=1
  }
  crearListaOP()
}

function crearListaOP() 
{
  //Browser.msgBox("Se va crear una lista en: Drive//BD2021//Listas Preceptoria")
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getRange("B7:D");
  range.sort({column:4, ascending: true})

  var carpetaDestino = DriveApp.getFolderById("unaCarpeta")
  var grado = sheetLista.getRange("G3").getValue()

  //Logger.log("Se han ordenado")
  //Logger.log(grado)
  var googleSheet = DriveApp.getFileById("unaID");
  //var duplicados = DriveApp.getFilesByName("Listado de alumnos de: "+grado);
  var copia = googleSheet.makeCopy(carpetaDestino).setName("Listado de alumnos de: "+grado)
  limpiarListasOP()
}
function limpiarListasOP()
{
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.getRange("B7:D").setValue("");
  
}

function limpiarCarpetaOP()
{
  var folder = DriveApp.getFolderById("unaID")
  var files = folder.getFiles()

  while(files.hasNext())
  {
    files.next().setTrashed(true)
  }
}