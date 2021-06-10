
function llenarTemplate(datosAlumnoR, datosPadreR, datosMadreR, datosGrupoFamiliarR)
{
  const googleDoc = DriveApp.getFileById("1j5PUZ5kjfg3qmrp8yPhubkbwmK93M07Y3Hvo4_3UJw4"); //abrir documento template
  const destinationFolder = DriveApp.getFolderById("1s3BcZgCSqEo6PHYr50ur2yx44qFO6jOX"); //donde se van a guardar 

  const copia = googleDoc.makeCopy(destinationFolder)//realizar una copia del documento template
  const documento = DocumentApp.openById(copia.getId()); //abrir el nuevo
  const body = documento.getBody() //obtener el cuerpo

  var turno = ""
  var turnoH1 = ""
  var turnoH2 = ""
  var turnoH3 = ""

  turno = calcularCurso(datosAlumnoR[2], datosAlumnoR[3])
  
  if(datosPadreR[5] == "No")
  {
    datosPadreR[6] = "-"
    datosPadreR[7] = "-"
  }
  if(datosPadreR[10] == "No")
  {
    datosPadreR[11] = "-"
  }
  if(datosMadreR[5] == "No")
  {
    datosMadreR[6] = "-"
    datosMadreR[7] = "-"
  }
  if(datosMadreR[10] == "No")
  {
    datosMadreR[11] = "-"
  }

  if(datosGrupoFamiliarR[0] == "No") //No tiene hermanos
  {
    datosGrupoFamiliarR[1] = "-"
    datosGrupoFamiliarR[2] = "-"
    datosGrupoFamiliarR[3] = "-" //Primer hermano
    datosGrupoFamiliarR[4] = "-"
    datosGrupoFamiliarR[5] = "-"
    datosGrupoFamiliarR[6] = "-" //Segundo Hermano
    datosGrupoFamiliarR[7] = "-"
    datosGrupoFamiliarR[8] = "-"
    datosGrupoFamiliarR[9] = "-" //Tercer Hermano
    datosGrupoFamiliarR[10] = "-"
    datosGrupoFamiliarR[11] = "-"
    turnoH1 = "-"
    turnoH2 = "-"
    turnoH3 = "-"

  }
  else if(datosGrupoFamiliarR[0] == "Si" && datosGrupoFamiliarR[2] == "Si") //Tiene hermanos y van a la institución
  {
    if(datosGrupoFamiliarR[3] != "" && datosGrupoFamiliarR[6] == "" && datosGrupoFamiliarR[9] == "") //Tiene un hermano
    {
      turnoH1 = calcularCurso(datosGrupoFamiliarR[4], datosGrupoFamiliarR[5])
      datosGrupoFamiliarR[6] = "-" //Segundo Hermano
      datosGrupoFamiliarR[7] = "-"
      datosGrupoFamiliarR[8] = "-"
      datosGrupoFamiliarR[9] = "-" //Tercer Hermano
      datosGrupoFamiliarR[10] = "-"
      datosGrupoFamiliarR[11] = "-"
      turnoH2 = "-"
      turnoH3 = "-"
    }
    else if(datosGrupoFamiliarR[3] != "" && datosGrupoFamiliarR[6] != "" && datosGrupoFamiliarR[9] == "")
    {
      turnoH1 = calcularCurso(datosGrupoFamiliarR[4], datosGrupoFamiliarR[5])
      turnoH2 = calcularCurso(datosGrupoFamiliarR[7], datosGrupoFamiliarR[8])
      datosGrupoFamiliarR[9] = "-" //Tercer Hermano
      datosGrupoFamiliarR[10] = "-"
      datosGrupoFamiliarR[11] = "-"
      turnoH3 = "-"
    }
    else
    {
      turnoH1 = calcularCurso(datosGrupoFamiliarR[4], datosGrupoFamiliarR[5])
      turnoH2 = calcularCurso(datosGrupoFamiliarR[7], datosGrupoFamiliarR[8])
      turnoH3 = calcularCurso(datosGrupoFamiliarR[10], datosGrupoFamiliarR[11])
    }
  }
  else
  {
    datosGrupoFamiliarR[3] = "-" //Primer hermano
    datosGrupoFamiliarR[4] = "-"
    datosGrupoFamiliarR[5] = "-"
    datosGrupoFamiliarR[6] = "-" //Segundo Hermano
    datosGrupoFamiliarR[7] = "-"
    datosGrupoFamiliarR[8] = "-"
    datosGrupoFamiliarR[9] = "-" //Tercer Hermano
    datosGrupoFamiliarR[10] = "-"
    datosGrupoFamiliarR[11] = "-"
    turnoH1 = "-"
    turnoH2 = "-"
    turnoH3 = "-"
  }
  //Alumno
  body.replaceText('{{nombreCompleto}}', datosAlumnoR[1]); //reemplazar parte por parte
  body.replaceText('{{curso}}', datosAlumnoR[2])
  body.replaceText('{{div}}',datosAlumnoR[3])
  body.replaceText('{{turno}}', turno)
  body.replaceText('{{direccion}}', datosAlumnoR[4])
  body.replaceText('{{dni}}', datosAlumnoR[5])
  body.replaceText('{{localidad}}', datosAlumnoR[6])
  body.replaceText('{{numTel}}', datosAlumnoR[7])
  //Padre
  body.replaceText('{{nombrePadre}}', datosPadreR[0])
  body.replaceText('{{direccionPadre}}', datosPadreR[1])
  body.replaceText('{{respConviveP}}', datosPadreR[2])
  body.replaceText('{{numTelPadre}}', datosPadreR[3])
  body.replaceText('{{dniPadre}}', datosPadreR[4])
  body.replaceText('{{respTrabajaP}}', datosPadreR[5])
  body.replaceText('{{lugTrabajoP}}', datosPadreR[6])
  body.replaceText('{{sueldoP}}', datosPadreR[7])
  body.replaceText('{{respJubP}}', datosPadreR[8])
  body.replaceText('{{oficioP}}', datosPadreR[9])
  body.replaceText('{{respPlanesP}}', datosPadreR[10])
  body.replaceText('{{respuestaPlanesSocialesCualesP}}', datosPadreR[11])
  //Madre
  body.replaceText('{{nombreMadre}}', datosMadreR[0])
  body.replaceText('{{direccionMadre}}', datosMadreR[1])
  body.replaceText('{{respConviveM}}', datosMadreR[2])
  body.replaceText('{{numTelMadre}}', datosMadreR[3])
  body.replaceText('{{dniMadre}}', datosMadreR[4])
  body.replaceText('{{respTrabajaM}}', datosMadreR[5])
  body.replaceText('{{lugTrabajoM}}', datosMadreR[6])
  body.replaceText('{{sueldoM}}', datosMadreR[7])
  body.replaceText('{{respJubM}}', datosMadreR[8])
  body.replaceText('{{oficioM}}', datosMadreR[9])
  body.replaceText('{{respPlanesM}}', datosMadreR[10])
  body.replaceText('{{respuestaPlanesSocialesCualesM}}', datosPadreR[11])
  //Grupo Familiar
  body.replaceText('{{respuestaHermanos}}', datosGrupoFamiliarR[0])
  body.replaceText('{{cantidadHermanos}}', datosGrupoFamiliarR[1])
  body.replaceText('{{respuestaHEstudian}}', datosGrupoFamiliarR[2])
  body.replaceText('{{nombreH1}}', datosGrupoFamiliarR[3])
  body.replaceText('{{cursoH1}}', datosGrupoFamiliarR[4])
  body.replaceText('{{divH1}}', datosGrupoFamiliarR[5])
  body.replaceText('{{turnoH1}}', turnoH1)
  body.replaceText('{{nombreH2}}', datosGrupoFamiliarR[6])
  body.replaceText('{{cursoH2}}', datosGrupoFamiliarR[7])
  body.replaceText('{{divH2}}', datosGrupoFamiliarR[8])
  body.replaceText('{{turnoH2}}', turnoH2)
  body.replaceText('{{nombreH3}}', datosGrupoFamiliarR[9])
  body.replaceText('{{cursoH3}}', datosGrupoFamiliarR[10])
  body.replaceText('{{divH3}}', datosGrupoFamiliarR[11])
  body.replaceText('{{turnoH3}}', turnoH3)


  documento.saveAndClose();

  const BLOBPDF = documento.getAs(MimeType.PDF);
  var nombreDePDF = "Solicitud de Reduccion arancelaría de: "+ datosAlumnoR[1]
  var id =destinationFolder.createFile(BLOBPDF).setName(nombreDePDF).getId();
  destinationFolder.removeFile(copia);
  Logger.log("Se ha llenado satisfactoriamente el formulario")
  enviarMail(id, datosAlumnoR[0])
}