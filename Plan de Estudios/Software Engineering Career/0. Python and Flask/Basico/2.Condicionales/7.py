print("Por favor ingrese una nota del alumno:")
nota_alumno=int(input("-->"))

def evaluacion(nota):
    valoracion="aprobado"
    if(nota==6):
        valoracion="Aprobado, necesita mejorar"
    elif(nota<6):
        valoracion="Desaprobado"
    else:
        valoracion="Aprobado"
    return valoracion

print(evaluacion(nota_alumno))

#Elif funciona como un solo bloque de instrucciones anidandolo
#Un if siempre va con su else
