import math

def calcularRaiz(num1):
    if num1<0:
        raise ValueError("El numero no puede ser negativo")
    else:
        return math.sqrt(num1)


op1 = (int(input("Introduce un numero: ")))

try:
    print(calcularRaiz(op1))
except ValueError as ErrorNumeroNegativo:
        print(ErrorNumeroNegativo)
        
print("Programa ended")