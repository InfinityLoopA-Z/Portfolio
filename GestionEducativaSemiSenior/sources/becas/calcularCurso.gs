function calcularCurso(infoC, infoDiv)
{
  var infoTurno 
  if(infoC == "1°" || infoC == "2°" || (infoC == "3°" && infoDiv == "A") || (infoC == "3°" && infoDiv == "B"))
  {
    infoTurno = "Mañana"
    return infoTurno
  }
  else
  {
    infoTurno = "Tarde"
    return infoTurno
  }
}
