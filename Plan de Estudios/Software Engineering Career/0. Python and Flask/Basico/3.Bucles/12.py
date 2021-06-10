for i in range(5):
    print(f"Valor de la variable:{i}") #Unir textos con variables


for i in range(5,10): #Contar desde el 5 al 9
    print(i)

for i in range(5,50,3): #Contar desde el 5 al 50 de 3 en 3
    print(i)

correo = input("Ingrse un correo: -->")
validacion = False
for i in range(len(correo)): #Lo utiliza como un array
    if correo[i] == "@": 
        validacion = True
    

if validacion:
    print("Email correcto")
else:
    print("Email Incorrecto")