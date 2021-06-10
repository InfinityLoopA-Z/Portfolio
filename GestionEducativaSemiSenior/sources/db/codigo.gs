//dni
var dni = 0;
var dniListas = 0;
var columnaDniBD = 7;
var columnaDniListas = 6;

//grado
var grado = "";
var columnaGradoListas = 1;
var gradoListas = "";
var columnaGradoBD = 0;
var gradoBD = "";

//grupos
var columnaGrupoListas = 0;
var grupoListas = "";
var grupo = "";
var columnaGrupoBD = 1;
var grupoBD = "";

//correo
var correo = "";
var columnaCorreosListas = 2;

var nombreAlumno = "";
var apellidoAlumno = "";
var nombreCompleto = "";
function onOpen()
{
  crearMenu();
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("NuevaBD-Total");
  var range = sheet.getRange("A2:BI");
  range.sort({column:1, ascending: true})
}

//crear nuestro menú
function crearMenu() 
{
  //Creamos el menú
  /*
  var menu = SpreadsheetApp.getUi().createMenu("Enviar Correos nuevos");
  //Añadimos los items con sus funciones
  menu.addItem("Enviar correos...", "enviarMailAceptado");
  //Agregamos el menu
  menu.addToUi();*/
  var ui = SpreadsheetApp.getUi()
  ui.createMenu("Crear Listas")
    .addItem("Generar una lista...", "crearLista")
    .addItem("Generar Listas de forma masiva... (ALPHA)", "redireccionar")
    .addToUi()
  ui.createMenu("Comparar Con SIMA (BETHA)")
    .addItem("Agregar datos desde SIMA...", "actualizarDSIMA")
    .addToUi()
}
function main() 
{
  var sheet =  SpreadsheetApp.getActive();
  var data =  sheet.getDataRange().getValues();

  for(i = 1; i<data.length;i++)
  {
    dni = parseInt(data[i][columnaDniBD])
    Logger.log("DNI A comparar en DB: "+ dni);
    compararDatos()
  }
}
function crearLista()
{
  var response = Browser.inputBox("Inserte el año y el curso que necesita generar."+"\n"+"Ej: 1°A (Sin espacios y en mayusculas)")
  grado = response
  Browser.msgBox("Se esta por crear una lista de: "+grado+"\n"+"Aguarde unos instantes")
  generarLista(grado)
}


function redireccionar()
{
  var link = "unaLista.com.ar"
  Browser.msgBox("En el siguiente enlace en el menu Crear Listas//Generar todas las listas podrá generar de manera masiva todas las listas"+
  "\n"+ link)
}