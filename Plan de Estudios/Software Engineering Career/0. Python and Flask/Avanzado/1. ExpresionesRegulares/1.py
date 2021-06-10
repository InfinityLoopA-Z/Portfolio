#Expresiones regulares
import re

"""
texto =  "This car is too fast"
patron = "car"
encontrado =  re.search(patron, texto)
if encontrado:
    print("Patron {} encontrado en el texto ".format(patron))
    ini = encontrado.start()
    fin = encontrado.end()
    print(f"El patron empieza en {ini} y termina en {fin}")
else:
    print(f"Patron {patron} no encontrado")

#Juventud, divino tesoro,¡ya te vas para no volver! Cuando quiero llorar, no lloro,y a veces lloro sin querer


"""
"""
texto = input("Ingrese un texto que desea saber cuantas veces aparece una palabra")
patron = input("Ingrese el patron de busqueda:")
resultado = re.findall(patron, texto) #Genera una lista con las palabras repetidas
cantidad = len(resultado) #Imprime la longitud de la lista 
print(resultado)
print(cantidad)
"""
listaPatrones = []
while True:
    try:
        texto = input("Ingrese un texto que desea saber cuantas veces aparece una palabra: -->").lower()
        cantidadPatrones = int(input("Ingrese la cantidad de patrones que usted va a utilizar para la busqueda: -->"))
        break

    except ValueError:
        print("Error, en Valor, por favor ingrese un valor valido")
        cantidadPatrones = int(input("Ingrese la cantidad de patrones que usted va a utilizar para la busqueda: -->"))
        break

for element in range(0,cantidadPatrones):
    palabra =  str(input(f"Ingrese el {element} patron: -->"))
    listaPatrones.append(palabra.lower())

for patron in listaPatrones:
    print(" ")
    print(f"Se busca el patron: {patron}")
    resultado =  re.findall(patron, texto)
    veces = len(resultado)
    print(resultado)
    print(f"La cantidad de veces que aparece la palabra son:{veces}")
    print(" ")
