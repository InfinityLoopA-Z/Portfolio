import pickle

class Persona:
    def __init__(self, nombre, genero, edad):
        self.nombre = nombre
        self.genero =  genero
        self.edad = edad
        print("Se ha creado una persona con el nombre de: ", self.nombre)

    def __str__(self):
        return "{}{}{}".format(self.nombre, self.genero,self.edad)

    
class ListaPersonas:
    personas = []
    def __init__(self):

        listaPersonas= open("fichero", "ab+")
        listaPersonas.seek(0)
        
        try:
            self.personas=pickle.load(listaPersonas)
            print("Se cargaron {} personas del fichero externo".format(len(self.personas)))
        except:
            print("El fichero está vacio")
        finally:
            listaPersonas.close()
            del(listaPersonas)

    def agregarPersonas(self,p):
        self.personas.append(p)
    def mostrarPersonas(self):
        for p in self.personas:
            print(p)
    
    def guardarPersoansEnFicheroExterno(self):
        listaPersonas=open("fichero","wb")
        pickle.dump(self.personas, listaPersonas)
        listaPersonas.close()
        del(listaPersonas)

    def mostrarInfoFicheroExterno(self):
        print("La información del fichero es la siguiente:")
        for p in self.personas:
            print(p)


miLista=ListaPersonas()

p = Persona("Isabel", " Femenino ", 29)
n = Persona("Rafael", " Masculino ", 39)
o = Persona("Jo", " Femenino ", 20)
miLista.agregarPersonas(p)
miLista.agregarPersonas(n)
miLista.agregarPersonas(o)

miLista.mostrarInfoFicheroExterno()