class Vehiculos():
    def __init__(self, marca, modelo):
        self.marca=marca
        self.modelo = modelo
        self.enMarcha = False
        self.acelera = False
        self.frena = False
    
    def arrancar(self):
        self.enMarcha= True

    def acelerar(self):
        self.acelera = True

    def frenar(self):
        self.frena = True
    
    def estado(self):
        print("Marca: ", self.marca, "\nModelo:", self.modelo,
        "\nEn Marcha:", self.enMarcha,"\nAcelerando: ",self.acelera,
        "\nFrenando: ",self.frena)

class Camioneta(Vehiculos):
    def carga(self,cargar):
        self.cargado = cargar
        if(self.cargado):
            return "La camioneta está cargada"
        else:
            return "La camioneta no está cargada"

class Moto(Vehiculos):
    hweell=""
    def weell(self):
        self.hweell = "Voy haciendo weel"
    
    def estado(self):
        print("Marca: ", self.marca, "\nModelo:", self.modelo,
        "\nEn Marcha:", self.enMarcha,"\nAcelerando: ",self.acelera,
        "\nFrenando: ",self.frena,"\nWeel:",self.hweell)

class VElectricos(Vehiculos):
    def __init__(self, marca, modelo):
        super().__init__(marca, modelo)
        self.autonomia=100
    def cargarEnergia(self):
        self.cargando = True

class BicicletaElectrica(VElectricos, Vehiculos):
    pass

moto = Moto("Honda", "CBR")
moto.weell()
moto.estado()

camioneta = Camioneta("Renault", "Kangoo")
camioneta.arrancar()
camioneta.estado()
print(camioneta.carga(True))

bici = BicicletaElectrica()