class Auto():
    def desplazamiento(self):
        print("Desplazamiento en 4 ruedas")


class Moto():
    def desplazamiento(self):
        print("Desplazamiento en 2 ruedas")


class Camion():
    def desplazamiento(self):
        print("Desplazamiento en 6 ruedas")


def desplazamientoVehiculo(vehiculo):
    vehiculo.desplazamiento()


miVehiculo = Camion()
desplazamientoVehiculo(miVehiculo)