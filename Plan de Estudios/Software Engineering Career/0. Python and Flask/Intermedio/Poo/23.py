class Auto():
    def __init__(self):
        #Propiedades
        self.__largoChasis=250
        self.__anchoChasis=120
        self.__ruedas=4 #Encapsulacion
        self.__enMarcha = False
    #Metodos
    def arrancar(self,arrancar):

        self.__enMarcha=arrancar
        if(self.__enMarcha):
            chequeo=self.__chequeo_Interno()

        if(self.__enMarcha and chequeo):
            return "El auto está en marcha"

        elif(self.__enMarcha and chequeo == False):
            return "Algo ha ido mal en el chequeo, no se puede arrancar"
        else:
            return "El auto está parado"
        
    def estado(self):
       print("El coche tiene ", self.__ruedas, " ruedas. Un ancho de ",
       self.__anchoChasis, "y un largo de ", self.__largoChasis)
    
    def __chequeo_Interno(self):
        print("Realizando chequeo interno")
        self.gasolina = "ok"
        self.aceite = "ok"
        self.puertas = "cerradas"

        if(self.gasolina == "ok" and self.aceite== "ok" and self.puertas == "cerradas"):
            return True
        else:
            return False

miAuto=Auto()
print(miAuto.arrancar(True))
miAuto.estado()

print("--------Se crea otro objeto-------")
miAuto2 = Auto()
print(miAuto2.arrancar(False))
miAuto2.estado()
