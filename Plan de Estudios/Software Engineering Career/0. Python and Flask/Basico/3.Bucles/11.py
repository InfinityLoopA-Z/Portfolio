contador=0
correo = input("Por favor ingrese un correo: -->")
for i in correo:
    if(i == "@" or i == "."):
        contador=contador+1


if contador==2:
    print("El email es correcto")
else:
    print("El email no es correcto")