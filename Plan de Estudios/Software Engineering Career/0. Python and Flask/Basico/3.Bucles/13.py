#While

i = 0


while i<10:
    print(f"El valor de i es: -->{i}")
    i=i+1

print("Programada terminado...")


edad = int(input("Ingrese una edad: -->"))

while edad<0 or edad>100:
    print("Introduzca una edad correcta")
    edad = int(input("Ingrese una edad: -->"))

print("Thx: ",edad)