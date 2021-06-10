from io import open
"""
archivo =  open("/home/fhc/Desktop/Software Engineering Career/0. Python desde 0 a Experto/Avanzado/0. TratamientoDeErrores/archivo2.txt", "w")
frase =  input("Ingrese por favor el contenido del archivo: -->")
archivo.write(frase)
archivo.close()
archivo =  open("/home/fhc/Desktop/Software Engineering Career/0. Python desde 0 a Experto/Avanzado/0. TratamientoDeErrores/archivo2.txt", "r")
texto = archivo.readlines()
archivo.close()
print(texto)
archivo =  open("/home/fhc/Desktop/Software Engineering Career/0. Python desde 0 a Experto/Avanzado/0. TratamientoDeErrores/archivo2.txt", "a")
archivo.write("\nawa")
archivo.close()
"""
archivo =  open("/home/fhc/Desktop/Software Engineering Career/0. Python desde 0 a Experto/Avanzado/0. TratamientoDeErrores/archivo2.txt", "r")
texto = archivo.read() #Se puede ingresar un limitante en el read
print(texto)
archivo.seek(0)
print(texto)
