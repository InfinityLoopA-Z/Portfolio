/*Este es él corazón del código, es lo que permite leer los valores del google Sheet generado por los formularios de google
y a su vez compara dichos valores con la base de datos y los almacena en las variables globales para ser usados a lo largo de todos
los scripts */

//funciones
function filtroFormulario()  //funcion que permite extraer los datos personales del alumno a traves del formulario de google
{
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) 
  {
    Logger.log('Numero de DNI: ' + data[i][columnaFormularioDNI]); //DNI
    DNI = data[i][columnaFormularioDNI]
    Logger.log(DNI);
    
    Logger.log('Fecha de solicitud de la constancia: ' + data[i][columnaFechaConstancia]); //Fecha de la constancia
    fechaConstancia = data[i][columnaFechaConstancia];
    Logger.log(fechaConstancia);

    Logger.log('Tipo de Constancia: '+ data[i][columnaTipodeConstancia]); //Tipo de Constancia
    tipoDeConstancia = data[i][columnaTipodeConstancia];
    Logger.log(tipoDeConstancia);
  
    Logger.log('Correo electronico: '+ data[i][columnaDatabaseCorreos]); //Correo electronico de recepción
    correo = data[i][columnaDatabaseCorreos];
    Logger.log(correo);

    if(tipoDeConstancia == "Constancia de inscripción")
    {
      Logger.log('Grado solicitado: '+ data[i][columnaGradoInscripcion]); //Grado que se solicita la constancia
      gradoInscricpion = data[i][columnaGradoInscripcion];
      gradoCursado = "...";
      gradoFinalizado = "...";
      Logger.log(gradoInscricpion);

    }

    else if(tipoDeConstancia == "Constancia de Cursado")
    {
      Logger.log('Grado solicitado: '+ data[i][columnaGradoCursado]); //Grado que se solicita la constancia
      gradoCursado = data[i][columnaGradoCursado];
      gradoInscricpion = "...";
      gradoFinalizado = "...";
      Logger.log(gradoCursado);
    }

    else
    {
      Logger.log('Grado solicitado: '+ data[i][columnaGradoFinalizado]); //Grado que se solicita la constancia
      gradoFinalizado = data[i][columnaGradoFinalizado];
      gradoInscricpion = "...";
      gradoCursado = "...";
      Logger.log(gradoFinalizado);
    }
      
    Logger.log('La constancia se encuentra dirigida a:' + data[i][columnaDirigida]); //A quien esta dirigida la constancia
    dirigido = data[i][columnaDirigida];
    dirigido1 = data[i][columnaDirigida1];
    dirigido2 = data[i][columnaDirigida2];
    dirigido3 =  data[i][columnaDirigida3];
    Logger.log(dirigido);
    comparacionDataBase(); //Para obtener los datos faltantes
    eliminarConstanciasRealizadas();
  }
}
  function comparacionDataBase()
  {
    var sheetDatabase = SpreadsheetApp.openByUrl(urlBaseDeDatos); //id de la base de datos
    var dataDatabase = sheetDatabase.getDataRange().getValues(); //obtención de valores de la base de datos

    for (var i = 1; i < dataDatabase.length; i++) 
    {
      if(DNI === dataDatabase[i][columnaDatabaseDNI])
      {
        Logger.log('DNI ENCONTRADO: ' + DNI);

        nombreAlumno = dataDatabase[i][columnaDatabaseNombre];
        apellidoAlumno = dataDatabase[i][columnaDatabaseApellido];
        nombreCompleto = String(apellidoAlumno + ", "+nombreAlumno);

        fechaDeNacimiento = dataDatabase[i][columnaDatabaseNacimiento];

        condicion = dataDatabase[i][columnaDatabaseCondicion];

        Logger.log('Condición:'+ dataDatabase[i][columnaDatabaseCondicion]);
        
        if(condicion != "null" || "undefined") //constancia aceptada
        {
          Logger.log("La constancia fue aceptada"); 
          enviarCorreoAfirmativo();
          fechaNacimientoArreglado = fixearFechas(fechaDeNacimiento);
          fechaConstanciaArreglada = fixearFechas(fechaConstancia);
          filtrosParaGuardar();
          filtroPDF();
        }
        else
        {
          Logger.log("La constancia fue rechazada");//constancia rechazada
          enviarCorreoRechazado();
        }
      }
    }
}