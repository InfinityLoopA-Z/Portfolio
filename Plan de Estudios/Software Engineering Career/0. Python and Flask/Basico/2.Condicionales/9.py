"""
and, or
"""

lista = ["matematicas", "lengua"]

asignatura=input("Escribe la asignatura: -->")
opcion=asignatura.lower()

if asignatura in lista:
    print("Existe la asignatura")
else:
    print("No existe la asignatura"+opcion)