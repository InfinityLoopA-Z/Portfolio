class Persona():
    def __init__(self, nombre, edad, direccion):
        self.nombre = nombre
        self.edad  = edad
        self.direccion = direccion

    def descripcion(self):
        print("Nombre: ", self.nombre,"\nEdad:", self.edad,
        "\nDireccion: ", self.direccion)


class Empleado(Persona):
    def __init__(self, salario, antiguedad, nombre_empleado, edad_empleado,residencia_empleado):
        super().__init__(nombre_empleado, edad_empleado,residencia_empleado)
        self.salario=salario
        self.antiguedad = antiguedad
    def descripcion(self):
       super().descripcion()
       print("\nSalario: ",self.salario)
       print("\nAntiguedad: ",self.antiguedad)


unEmpleado = Empleado(1500, 15, "sir", 55, "Venezuela")
unEmpleado.descripcion()

print(isinstance(unEmpleado, Empleado))
print(isinstance(unEmpleado, Persona)) 