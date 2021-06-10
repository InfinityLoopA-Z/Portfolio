var sheetForm = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Lbppw23YSDNHrYE5sYh4JRKCjuBVeKRoarACB3IPCzc/edit#gid=910752295")
var dataForm =  sheetForm.getDataRange().getValues()
var i;

function main()
{
  leerDatos()
  marcarHecho()
}

function leerDatos()
{
  for(i = 2; i<dataForm.length;i++)
  {
    var fix = i+1
    var contadorConstancias = 0
    var colorhecho = "#33c9ff"
    var hechoColor = sheetForm.getRange(String("AZ"+fix)).getBackground()
    Logger.log(hechoColor)
    if(hechoColor != colorhecho)
    {
      //Datos Alumno
      var correoAl = dataForm[i][1]
      var nombreCompletoAl = dataForm[i][3]
      var curso = dataForm[i][4]
      var division = dataForm[i][5]
      var domicilioAl = dataForm[i][6]
      var dniAl =  dataForm[i][7]
      var localidadAl = dataForm[i][8]
      var celAl = dataForm[i][9]
      //Datos Padre
      var nombreCompletoP = dataForm[i][10]
      var domicilioP =  dataForm[i][11]
      var conviveP = dataForm[i][12]
      var celP = dataForm[i][13]
      var dniP = dataForm[i][14]
      var trabajaP = dataForm[i][15]
      var lugardeTrabajoP = dataForm[i][16]
      var sueldoP = dataForm[i][17]
      var jubP = dataForm[i][18]
      var oficioP = dataForm[i][19]
      var planesP = dataForm[i][20]
      var cPlanesP = dataForm[i][21]
      //Datos madre
      var nombreCompletoM = dataForm[i][22]
      var domicilioM =  dataForm[i][23]
      var conviveM = dataForm[i][24]
      var celM = dataForm[i][25]
      var dniM = dataForm[i][26]
      var trabajaM = dataForm[i][27]
      var lugardeTrabajoM = dataForm[i][28]
      var sueldoM = dataForm[i][29]
      var jubM = dataForm[i][30]
      var oficioM = dataForm[i][31]
      var planesM = dataForm[i][32]
      var cPlanesM = dataForm[i][33]
      //Grupo Familiar
      var tieneH = dataForm[i][34]
      var cantidadH = dataForm[i][35]
      var estudianITGB = dataForm[i][36]
      var nombreCompletoH1 = dataForm[i][37]
      var cursoH1 = dataForm[i][38]
      var divH1 = dataForm[i][39]
      var nombreCompletoH2 = dataForm[i][40]
      var cursoH2 = dataForm[i][41]
      var divH2 = dataForm[i][42]
      var nombreCompletoH3 = dataForm[i][43]
      var cursoH3 = dataForm[i][44]
      var divH3 = dataForm[i][45]
      var datosAlumno =[correoAl, nombreCompletoAl, curso, division, domicilioAl, dniAl, localidadAl, celAl]
      var datosPadre = [nombreCompletoP, domicilioP, conviveP, celP, dniP, trabajaP, lugardeTrabajoP, sueldoP, jubP, oficioP, planesP, cPlanesP]
      var datosMadre = [nombreCompletoM, domicilioM, conviveM, celM, dniM, trabajaM, lugardeTrabajoM, sueldoM, jubM, oficioM, planesM, cPlanesM]
      var datosGrupoFamiliar= [tieneH, cantidadH, estudianITGB, nombreCompletoH1, cursoH1, divH1, nombreCompletoH2, cursoH2, divH2, nombreCompletoH3, cursoH3, divH3]
      Logger.log("Se han leido todos los datos")
      llenarTemplate(datosAlumno, datosPadre, datosMadre, datosGrupoFamiliar)
    }
  }
}