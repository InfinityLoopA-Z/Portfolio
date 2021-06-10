def evaluacionEdad(edad):
    if edad<0:
        raise TypeError("Ingrese una edad valida") #Error de tipeo
    if edad<20:
        return "Eres muy joven"
    elif edad<40:
        return "Eres joven"
    elif edad<65:
        return "Eres maduro"
    elif edad<100:
        return "Too old..."

edadD = int(input("Ingres su edad: -->"))
print(evaluacionEdad(edadD))