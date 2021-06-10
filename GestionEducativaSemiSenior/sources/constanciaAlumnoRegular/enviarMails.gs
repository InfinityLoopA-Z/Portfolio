/*Este script es el encargado de enviar los correos de aceptación, rechazo y a los preceptores sobre las constancias de alumno regular
a los preceptores se les puede enviar tanto el Link de la constancia para imprimirla o directamente el archivo, solo hay que ajustar unas lineas y
por supuesto que el cuerpo del mail puede ser cambiado */

//var file = DriveApp.getFileById(idConstancia)

function enviarCorreoAfirmativo()
{
  if(enviarMailsConstancia == 1)
  {
    GmailApp.sendEmail(correo,"Constancia de Alumno regular",cuerpoMailAceptado);
    Logger.log("Constancia Aceptada, Correo enviado");
  }
}

function enviarCorreoRechazado()
{
  if(enviarMailsConstancia == 1)
  {
    GmailApp.sendEmail(correo, "Constancia de Alumno regular", cuerpoMailRechazado);
    Logger.log("Constancia Rechazada, Correo enviado");
  }
}

function enviarCorreoPreceptoria(urlPDF, nombrePDF)
{
  var urlPDFC = urlPDF;
  var nombreCompletoPDF = nombrePDF
  var replyToServer ="srv1@tecnicobelgranof29.edu.ar"
  var correosCompletos = [correosPreceptoria, replyToServer]

  var cuerpoMailPreceptoria= String("El sistema ha generado automaticamente una constancia de alumno regular perteneciente al alumno: "+nombreCompletoPDF+"\n"+"En el siguiente enlace:" +urlPDFC+"\n"+"\n"+"Saluda atte: Equipo de Coordinación Digital ITGB");
  
  if(enviarMailsPreceptoria == 1)
  {
    Logger.log(nombreCompleto)
    Logger.log(url)
    GmailApp.sendEmail(correosCompletos, "Constancia de Alumno regular", cuerpoMailPreceptoria/*,{attachments:[file]}*/);
    Logger.log("Constancia enviada a preceptoria");
  }
}