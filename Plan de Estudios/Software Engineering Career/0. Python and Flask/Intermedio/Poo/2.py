from typing import get_origin


class Persona:
    def __init__(self,name,lastname,age):
        self.name = name
        self.lastname = lastname
        self.age = age

    def getName(self):
        return self.name

    def getLastname(self):
        return self.lastname

    def setName(self, name):
        self.name = name
    
    def setLastName(self, lastname):
        self.lastname = lastname

    def setAge(self):
        return self.age

    def talk():
        print("Hello World")

    def getFullName(self):
        return self.name + " " + self.lastname+" "+str(self.age)

persona = Persona("Sir", "Hungry", 20)
name = persona.getFullName()
print(persona.getFullName())
