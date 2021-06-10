#Decoradores

def asteriscos(funcion):
    def poner_asteriscos():
        print("*********************")
        funcion()
        print("*********************")
    return poner_asteriscos

@asteriscos #Se coloca en frente de la funcion que se desee cambiar
def imprimir():
    print("Hola")

#imprimir = asteriscos(imprimir)
imprimir()