var gradoBuscado = "";
var cantidad = ["1","2","3","4","5","6","7"]
var nombreAlumno = "";
var apellidoAlumno = "";
var nombreCompleto = "";
var division = "";
var grado = "";
var grupo = "";
var columnaGrado = 0; 
var columnagrupo = 1;
var columnaApellido = 3;
var columnaNombre = 4;
var columnaGrupoLista = 2;
var columnaNombreLista = 4;

function generarLista(gradoRecibido)
{
  gradoBuscado = gradoRecibido;

  var sheetListas = SpreadsheetApp.openByUrl("unaURL");
  var dataListas = sheetListas.getDataRange().getValues();
  var sheet = SpreadsheetApp.getActiveSpreadsheet(); //DB
  var data = sheet.getSheetByName("NuevaBD-Total").getDataRange().getValues() //DB

  for(var k = 0; k<data.length;k++)
  {
    var gradoK = String(data[k][columnaGrado])
    if(gradoK == gradoBuscado)
    {
      var nombrePP = nombreCompleto= String(data[k][columnaApellido] + ", "+ data[k][columnaNombre]).toLocaleUpperCase()
      cantidad.push(nombrePP)
      //Logger.log(cantidad.length)
    }
  }

  for(var j = 7; j<cantidad.length;j++)
  {
    for(var i = 0; i < data.length;i++)
    {
      grado =  String(data[i][columnaGrado]);
      grupo = String(data[i][columnagrupo]);
      if(grado === gradoBuscado)
      {
        //Logger.log(grado)
        nombreCompleto= (String(data[i][columnaApellido] + ", "+data[i][columnaNombre]))
        Logger.log(nombreCompleto)
        sheetListas.getActiveSheet().getRange(j,columnaGrupoLista).setValue(grupo)
        sheetListas.getActiveSheet().getRange(j,columnaNombreLista).setValue(nombreCompleto);
        sheetListas.getActiveSheet().getRange("G3").setValue(grado);
        //sheetListas.getActiveSheet().getRange("B7:D").sort({column: 3, ascending: false})
        j =j+1
      }//*/,
    }
  }
  //Browser.msgBox("Se ha generado una lista para editar en el siguiente enlace: unEnlace")
}