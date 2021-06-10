function filtrosParaGuardar()
{
  if(gradoInscricpion == "1° Año"|| gradoCursado == "1° Año")
  {
    correosPreceptoria = "lquiroga@tecnicobelgranof29.edu.ar"
    carpetaDestino = "1xEb3sII-xvvWuVtM1Q1jvPdeISbv1-8m"
    Logger.log(carpetaDestino)
  }

  else if(gradoInscricpion == "2° Año" || gradoCursado == "2° Año")
  {
    correosPreceptoria = "pnieva@tecnicobelgranof29.edu.ar"
    carpetaDestino = "1hPRsUkdyaEAPyjeYA9qep6XKQCybZiTe"
  }

  else if(gradoInscricpion == "3° Año"|| gradoCursado == "3° Año")
  {
    correosPreceptoria = "pnieva@tecnicobelgranof29.edu.ar"
    carpetaDestino = "1i6Bb84sWk8uZk12Pz5iTuqQe0o_jxEMB"
  }

  else if(gradoInscricpion == "4° Año"|| gradoCursado == "4° Año")
  {
    correosPreceptoria = "jgallardo@tecnicobelgranof29.edu.ar"
    carpetaDestino = "1cUV97NuaPBNfa8NRFnDkCWYRYxHaMM1E"
  }

  else if(gradoInscricpion == "5° Año"|| gradoCursado == "5° Año")
  {
    correosPreceptoria = "gmoreno@tecnicobelgranof29.edu.ar"
    carpetaDestino = "160t0cofkEkbbiixOz2az-5zxoSGGM2Fh"
  }

  else if(gradoInscricpion == "6° Año"|| gradoCursado == "6° Año")
  {
    correosPreceptoria = "fbravo@tecnicobelgranof29.edu.ar"
    carpetaDestino = "1o3WMsuKSSw3ytfktupkzZ44_cxKNbODd"
  }

  else if(gradoInscricpion == "7° Año"|| gradoCursado == "7° Año")
  {
    correosPreceptoria = "jperez@tecnicobelgranof29.edu.ar"
    carpetaDestino = "1XBsJrA0BI9W1RdlBIuYIoKq9hnUIAwHD"
  }

  else
  {
    
    carpetaDestino = "1pFgDe_cllKcqHKJTYVMDDZbEytGl5Hid"
    Logger.log("Ups, algo malio sal...")
  }
}