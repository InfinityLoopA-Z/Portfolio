function enviarMailAceptado()
{
  var response = Browser.msgBox("Se van a enviar Correos a todos los mails nuevos"+"\n"+"¿Seguro que desea continuar?",Browser.Buttons.YES_NO_CANCEL); 
  if ( response == "yes")
  {
    Browser.msgBox("Se estan enviando los emails, aguarde un instante",Browser.Buttons.OK)
    var numeroGrupo = 0;
    var division = "";
    var grado = "";
    var correo = ""
    var nombreCompleto = "";
    var file = DriveApp.getFileById("unaId")
    var columnaGrado = 0;
    var columnagrupo = 1;
    var columnaApellido = 4;
    var columnaNombre = 5;
    var columnacorreoC = "D";
    var columnacorreo = 3;
    var grupo = 0;
    var colorCorreo = "#b6dee7"

    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();

    for(var i = 1; i < data.length;i++)
    {
      var fix = i+1
      var correoColor = sheet.getRange(String(columnacorreoC+fix)).getBackground()
      correo = data[i][columnacorreo];
      //Logger.log("El correo es: "+correo)
      grado =  String(data[i][columnaGrado]);
      grupo = String(data[i][columnagrupo]);
      gradoNumero =  String(grado).split("°")    
      //Logger.log(correoColor)
  
      if(correoColor == colorCorreo)
      {
        //Logger.log(grupo[i]);
        if(correo == "")
        {
          //Logger.log("Algo malio sal");
        }
        nombreCompleto = String(data[i][columnaApellido]+ ", "+ data[i][columnaNombre])
        if(grupo === "G1")
        {
          numeroGrupo = 1;
        }
        else
        {
          numeroGrupo = 2;
        }
        gradoArreglado = String(grado).split("°");
        grado = gradoArreglado[0];
        division = gradoArreglado[1];

        cuerpodelEmail = "Estimados Padres:" + "\n"+
        "Nos dirigimos a Uds. a fin de informarles que:"+"\n"+
        "Alumno/a: "+ nombreCompleto + "\n"+
        "Curso: " +grado + "°"+"\n" +
        "División: " + division + "\n" +
        "Grupo N°: " +numeroGrupo + "\n" +
        "\n"+
        "Debe iniciar las clases presenciales teniendo en cuenta los datos arriba consignados, a partir del cronograma que se encuentra en el protocolo adjuntado. Solicitamos respetar los horarios de ingreso y los días de asistencia de cada Grupo, con el fin de cuidarnos entre todos." + "\n" +
        "\n"+
        "Les pedimos que lean detenidamente el protocolo y lo dialoguen con su hijo/a."+ "\n" +
        "La presencia de su hijo/a en la Institución implica el compromiso de cumplir con todo lo solicitado." + "\n" +
        "\n"+
        "\n"+
        "Saludo fraterno a cada uno de Uds. en esta nueva etapa que iniciamos, confiándonos al Señor de la Salud y a la Virgen de la Merced." + "\n"+
        "\n" +
        "\n" +
        "\n" +
        "En el caso de haber recibido este Correo por segunda vez, ignorelo y si el alumno ya ha recibido una asignación de grupo en precensialidad,descarte este mail."+
        "\n"+
        "\n"+
        "Atte: Equipo de Coordinación Digital ITGB"

        //Logger.log(correo)
        GmailApp.sendEmail(correo,"Información: Inscripción y Grupo de presencialidad",cuerpodelEmail,{attachments:[file]})
        sheet.getRange(String(columnacorreoC+fix)).setBackground("#7FFF00")
        //Logger.log("El correo se a enviado satisfactoriamente al correo: "+correo);
        //Logger.log("El numero de grupo es: "+numeroGrupo);
        //Logger.log("El nombre del alumno es: "+nombreCompleto);
      }
      else
      {
        //Logger.log("El alumno no se encuentra inscripto");
      }
    }
    Browser.msgBox("Todos los correos se han enviado satisfactoriamente")
  }
}