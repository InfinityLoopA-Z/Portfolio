palabra = input("Ingrese una palabra:")

for letra in palabra:
    if letra == " ":
        continue #Salta a la proxima iteracion
    print("Viendo la letra: "+letra)

contador = 0
for letra in palabra:
    if letra ==" ":
        continue
    contador+=1

print(contador)
print(len(palabra))

for i in palabra:
    if i == "@":
        arroba = True
        break

else: #Solo se ejecuta cuando termina el for
    arroba=False

print(arroba)