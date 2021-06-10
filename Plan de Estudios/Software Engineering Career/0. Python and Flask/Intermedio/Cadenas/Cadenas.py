"""
nombreUsuario = input("Introduce el nombre de usuario: -->")

print("EL nombre es: ", nombreUsuario.upper())
print("El nombre es: ", nombreUsuario.lower())
print("El nombre es: ", nombreUsuario.capitalize())
"""
"""
edad = input("Introduce una edad: ")
print(edad.isdigit())
"""
edad = input("Introduce una edad: ")

while(edad.isdigit()==False):
    print("Por favor ingrese un valor numerico")
    edad = input("Introduce una edad: ")

if(int(edad)<18):
    print("No puede pasar")
else:
    print("Puede Pasar")
