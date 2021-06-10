#Diccionarios
#Clave:Valor - Elementos desordeandos

diccionario={"Alemania":"Berlin", "Francia":"Paris","Reino Unido":"Londres", "Argentina":"Buenos Aires"}
print(diccionario["Alemania"])
diccionario["Italia"] = "Lisboa" #Asignar un valor
print(diccionario) #Imprimir todo el diccionario
diccionario["Italia"] = "Roma" #Corregir un valor
print(diccionario)
del diccionario["Francia"] #Borrar una clave del diccionario
print(diccionario)


tupla = ["España", "Francia", "Reino Unido"]
diccionario2 = {tupla[0]:"Madrid", tupla[1]:"Parid",tupla[2]:"Londres"}
print(diccionario2["Francia"])
diccionario3 = {23:"Jordan","Nombre":"Michael", "Equipo":"Chicago","Anillos":[1991,1992,1993,1996,1997,1998]}
print(diccionario3["Anillos"])
diccionario4 = {23:"Jordan","Nombre":"Michael", "Equipo":"Chicago","Anillos":{"temporadas":[1991,1992,1993,1996,1997,1998]}} #Diccionario dentro de un diccionario
print(diccionario4["Anillos"])

print(diccionario.keys())
print(diccionario.values())
print(len(diccionario))

