 #Tuplas

tupla=("Hola","Como tas",122131)
hola, nose, datos=tupla #Cargar datos de una tupla en variables segun elementos
lista = list(tupla) #De tupla a lista
lista.append("Me agregué")
tupla = tuple(lista) #De lista a tupla
print(tupla)
print(lista)
print(tupla.count("Como tas")) #Imprime la cantidad de veces que aparece ese elemento
print(len(tupla)) #Printea la longitud de la tupla
print(hola)
print(nose)
print(datos)
