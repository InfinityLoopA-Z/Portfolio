class Persona():
    texto = ''
    def __init__(self, nombre): #Metodo de inicializacion
        self.nombre = nombre
    def saludar(self):
        self.texto="Hi, Mi name is "+self.nombre
        return self.texto

persona1 = Persona("uwu")
texto = persona1.saludar()
print(type(persona1))
print(persona1.nombre)
print(texto)

class Adulto(Persona):
    def __init__(self, nombre):
        Persona.__init__(self,nombre) #Clase padre
    def saludar(self):
        self.texto = "Hi im old"
        return self.texto

    def tarjeta(self, tarjeta):
        self.tarjeta= tarjeta
    
    def __str__(self):
        self.texto = "Adulto : nombre = "+self.nombre
        return self.texto
        
adulto1 = Adulto("awa")
adulto1.tarjeta("123123123")
texto =  adulto1.saludar()

print(type(adulto1))
print(texto)
print(adulto1.tarjeta)
print(adulto1)