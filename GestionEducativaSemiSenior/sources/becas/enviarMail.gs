function enviarMail(idRecibida, correoRecibido)
{
  var file = DriveApp.getFileById(idRecibida)
  var link =  "https://forms.gle/dEusD6WzMyhdMfBh6"
  Logger.log("Se esta enviando un correo a:" +correoRecibido)
  var cuerpoMail = "Su solicitud de Reduccion Arancelaria fue recepcionada." + "\n"+
  "En este mail se adjunta una copia de dicha solicitud, la cual debe firmar y cargar una foto en el link que se encuentra adjunto en este mail" + "\n"+
  "Para poder acceder al ingreso de la solicitud de Reduccion Arancelaria debe cumplir con todos los pasos SIN EXCEPCIÓN"+"\n"+
  "1. Carga del Formulario \n"+
  "2. Impresion del Formulario \n" +
  "3. Envio del formulario firmado por medio del siguiente link: "+ link +" en el cual se debe adjuntar una foto del formulario firmado" + "\n"+
  "Una vez cumplidos estos pasos, será informado de la resolución al Correo con el Cual usted completó el formulario" +"\n"+"\n"+
  "Saluda Atte: Equipo de Coordinación Digital ITGB"
  GmailApp.sendEmail(correoRecibido, "Solicitud de Reducción Arancelaria", cuerpoMail, {attachments:[file]})
  //GmailApp.sendEmail("mflores@tecnicobelgranof29.edu.ar", "Duplicado de Reduccion Arancelaria", cuerpoMail, {attachments:[file]})
  GmailApp.sendEmail("srv1@tecnicobelgranof29.edu.ar", "Duplicado de Reduccion Arancelaria", cuerpoMail, {attachments:[file]})
}