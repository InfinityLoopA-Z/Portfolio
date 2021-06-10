/*Esta parte del código es la principal, es donde se encuentran todas las variables globales, las cuales modificandolas cambiaría el actuar del
código, por ejemplo, cambiar de base de datos sería una tarea sencilla desde aquí, o cambiar el cuerpo de los e-mails o los destinatarios de los mismos */
//Variables
var DNI = 0;
//Columnas formulario
var columnaDatabaseCorreos = 1;
var columnaFormularioDNI = 2;
var columnaFechaConstancia = 3;
var columnaTipodeConstancia = 4;
var columnaGradoInscripcion = 5;
var columnaGradoCursado = 6;
var columnaGradoFinalizado = 7;
var columnaDirigida = 8;
var columnaDirigida1 = 9;
var columnaDirigida2 = 10;
var columnaDirigida3 = 11;
//var columnaRealizado = 10;

//Columnas base de datos
var urlBaseDeDatos = "unaUrl";
var columnaDatabaseNombre = 5;
var columnaDatabaseApellido = 4;
var columnaDatabaseDNI = 7;
var columnaDatabaseCondicion = 0;
var columnaDatabaseNacimiento = 6;
//Variables globales
var constanciaTemplate = "unaID";
var carpetaDestino = "";
var url = "";
var idConstancia = "";
var condicion = "";
var correo = "";
var correosPreceptoria = "srv1.itgb@gmail.com";

var cuerpoMailAceptado = String("Su certificado de alumno regular fue generado exitosamente, por favor retire la constancia en secretaría en 48hs hábiles"+"\n"+"\n"+"Saluda atte: Equipo de Coordinación Digital ITGB");

var cuerpoMailRechazado = "Su certificado no pudo ser generado, por favor contactese con el mail de soporteav@tecnicobelgranof29.edu.ar";

var enviarMailsConstancia = 1; //0 no, 1 si
var enviarMailsPreceptoria = 1 //0 no, 1 si
var nombreCompleto = "";
var fechaDeNacimiento = "";
var fechaNacimientoArreglado = "";
var tipoDeConstancia = "";
var tipoDeConstanciaPDF = 0;
var fechaConstancia = "";
var fechaConstanciaArreglada = "";
var dirigido = "";
var dirigido1 = "";
var dirigido2 = "";
var dirigido3 = "";
var gradoInscricpion = "";
var gradoCursado = "";
var gradoFinalizado = "";
var nombreAlumno = "";
var apellidoAlumno = "";

function main() 
{
  filtroFormulario();
}
