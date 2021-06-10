/*Esta parte del código es la encargada de generar un pdf a partir del Doc Template (Modelo de Constancia de alumno regular), generando una copía del mismo y reemplazando partes del documento por los datos guardados en las variables globales y generando un PDF con el nombre "Constancia de alumno
regular + nombre completo del alumno" permitiendo así una rápida busqueda de constancias generadas*/
function filtroPDF()
{
  var dirigidos = ""
  var dirigidos1 = ""
  var dirigidos2 = ""
  var dirigidos3 = ""

  if(dirigido != "" && dirigido1 == "" && dirigido2 == "" && dirigido3 == "")
  {
    dirigidos = dirigido;
    crearPDF(dirigidos)
  }
  else if(dirigido != "" && dirigido1 != "" && dirigido2 == "" && dirigido3 == "")
  {
    dirigidos = dirigido;
    crearPDF(dirigidos)

    dirigidos1 =  dirigido1
    crearPDF(dirigidos1)
  }

  else if(dirigido != "" && dirigido1 != "" && dirigido2 != "" && dirigido3 == "")
  {
    dirigidos = dirigido;
    crearPDF(dirigidos)

    dirigidos1 =  dirigido1
    crearPDF(dirigidos1)

    dirigidos2 =  dirigido2
    crearPDF(dirigidos2)
  }

  else if(dirigido != "" && dirigido1 != "" && dirigido2 != "" && dirigido3 != "")
  {
    dirigidos = dirigido;
    crearPDF(dirigidos)

    dirigidos1 =  dirigido1
    crearPDF(dirigidos1)

    dirigidos2 =  dirigido2
    crearPDF(dirigidos2)

    dirigidos3 =  dirigido3
    crearPDF(dirigidos3)
  }
}

function crearPDF(dirigido)
{
  var dirigidoa = dirigido;
  const googleDoc = DriveApp.getFileById(constanciaTemplate); //abrir documento template
  const destinationFolder = DriveApp.getFolderById(carpetaDestino); //donde se van a guardar 
  const copia = googleDoc.makeCopy(destinationFolder)//realizar una copia del documento template
  const documento = DocumentApp.openById(copia.getId()); //abrir el nuevo
  const body = documento.getBody() //obtener el cuerpo
  Logger.log(body);
  Logger.log("Datos rellenados satisfactoriamente");
  body.replaceText('{{nombreCompleto}}', nombreCompleto); //reemplazar parte por parte
  body.replaceText('{{DNI}}', DNI);
  body.replaceText('{{fechaNacimiento}}',fechaNacimientoArreglado);
  body.replaceText('{{inscriptoValue}}',gradoInscricpion);
  body.replaceText('{{cursadoValue}}',gradoCursado);
  body.replaceText('{{finalizadoValue}}',gradoFinalizado);
  body.replaceText('{{dirigido}}', dirigidoa);
  body.replaceText('{{dia}}',diafix);
  body.replaceText('{{mes}}', mes);
  body.replaceText('{{year}}', year);
  documento.saveAndClose();
  const BLOBPDF = documento.getAs(MimeType.PDF);
  pdf = destinationFolder.createFile(BLOBPDF).setName("Constancia de Alumno Regular "+ nombreCompleto);
  destinationFolder.removeFile(copia);
  url = pdf.getUrl()
  //idConstancia = documento.getId();
  Logger.log("Se ha creado la constancia en el siguiente enlace: "+url);
  enviarCorreoPreceptoria(url,nombreCompleto);
}