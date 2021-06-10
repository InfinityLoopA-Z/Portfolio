import math
print("Programa para calcular una raiz cuadrada")

numero = int(input("Introduce un numero:"))

intentos = 0

while numero<0:
    print("No existe una raiz de un numero negativo en los reales")
    numero=int(input("Introduce un numero:"))
    if numero<0:
        intentos=intentos+1
    if intentos == 2:
        print("Demasiados instentos, terminando...")
        break
    
if intentos<2:
    print(numero)
    solucion = math.sqrt(numero)
    print("La raiz cuadrada es: "+ str(solucion))