#Generadores II Yield From

def devolver_Ciudades(*ciudades): #Recivirá N elementos como tupla
    for elemento in ciudades:
        #for subElemento in elemento:
            yield from elemento


ciudadesDevueltas = devolver_Ciudades("Madrid", "Buenos Aires", "Valencia")

print(next(ciudadesDevueltas))
print(next(ciudadesDevueltas))