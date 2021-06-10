#Generadores

"""
def generadorDePares(limite):
    num=1
    lista=[]
    while num<limite:
        lista.append(num*2)
        num+=1
    return lista
"""
#No se necesita crear la lista completa y no reserva tanto espacio en la memoria
def generadorDePares(limite): #Guarda la salida en un objeto iterable
    num = 1
    while num<limite:
        yield num*2
        num=num+1
devolverPares = generadorDePares(10)
"""
print("Generador de lista", generadorDePares(10))

for i in devolverPares[:3]:
    print(i)"""

print(next(devolverPares)) #Itera sin el for estadoo de pausa y suspecion entre llamada y llamada
print("Otra linea")
print(next(devolverPares))
print("Otra linea")
print(next(devolverPares))
