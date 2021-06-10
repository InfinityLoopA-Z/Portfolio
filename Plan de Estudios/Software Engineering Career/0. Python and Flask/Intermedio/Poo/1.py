class Contacto:
    def __init__(self, nombre, numero):
        self.nombre =  nombre
        self.numero =  numero


listaContactos = []
while(True):
    print("-------------")
    print("1.- ", "Mostrar lista de Contactos")
    print("2.-","Crear Contacto")
    print("3.-","Salir")
    print("Seleccione una opción: --->")
    valor = int(input())
    print("-------------")
    if(valor == 1):
        if(len(listaContactos)==0):
            print("La lista de contactos está vacia")
        for i in range(0,len(listaContactos)):
            print("-------------")
            print(i+1, listaContactos[i].nombre,":", listaContactos[i].numero)
            print("-------------")
        print("")

    if(valor == 2):
        print("Crear un Nuevo Contacto:")
        nombre =  str(input("Nombre:"))
        numero =  int(input("Numero:"))
        contacto = Contacto(nombre, numero)
        listaContactos.append(contacto)

    if(valor == 3):
        print("Saliendo de la aplicación...")
        break