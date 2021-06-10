#Listas

alist=["No", "Si", "Maybe", "Never"]

print(alist[:1]) #Printea hasta el elmento 2
print(alist[1:3]) #Printea el rango 1:3 (0-2)
print(alist[1:]) #Printea los elementos desde el 1 en adelante (2 -)
print(alist[:]) #Printea todos los elementos

alist.insert(0, "Que diablos haces aquí fred!")
print(alist[:])
print("Si está en el indice:",alist.index("Si"))
alist.extend(["No se que hago aquí", "Ayudaaa"]) #Insertando elementos al final de la lista
print(alist[:])

eliminado =alist.pop(1) #Elimina al elemento de Index 1
print("El elemento eleminado de la lista es:", eliminado)
print("La lista queda: ", alist[:])
removed = alist.remove("Maybe") #Remueve la coincidencia o la primera coincidencia
print("El elemento removido fue:", removed)
print("La lista actualizada es: ", alist[:])

alist.reverse() #Invierte la lista
print(alist)
alist.reverse
alist.sort(reverse=True) #De Z a A
print("Lista ordenada Z-A",alist)
alist.sort(reverse=False) #De A a Z
print("Lista ordenada de A-Z",alist)
alist.append("uwu") #Inserta un objeto al final de la lista
print(alist)
alist.clear()
print("Nothing to do: ",alist)
print("uwu" in alist) #Retorna un Bool

