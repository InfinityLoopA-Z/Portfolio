#Tratamiento de errores
#Este programa se encarga de abrir un fichero y sobreescribirlo y en el caso de que no exista, lo crea
#/home/fhc/Desktop/Software Engineering Career/0. Python desde 0 a Experto/Avanzado/0. TratamientoDeErrores/
print("A continuación ingrese la ruta del fichero que desee leer -->")
ruta = input(":")
try:
    fichero = open(ruta, "r")
    contenido = fichero.read()
    print("El contenido del fichero es: ", contenido)
    print("¿Desea sobreescribir el fichero?")
    respuesta = input("Yes/No: --->")
    if respuesta == "Yes":
        print("Ingrese el contenido del fichero:-->")
        contenido =input()
        fichero.write(contenido)
    else:
        print("Saliendo...")
except:
    print("Error, El fichero no existe, se va a crear un fichero en la ruta especificada")
    fichero = open(ruta,"w")
    mensaje = input("Ingrese los datos con los que desea llenar el fichero: -->")
    fichero.write(mensaje)
finally:
    fichero.close()
    print("Fichero guardado")

print("Continua el programa")
