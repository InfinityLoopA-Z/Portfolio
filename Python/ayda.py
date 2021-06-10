#!/usr/bin/env python3
# -- coding: utf-8 --
"""
Created on Tue Jan 14 23:37:53 2020

@author: root
"""
#%% Importar Librerias
from PIL import Image
import pytesseract
from pynput.keyboard import Key, Controller
import time
from datetime import datetime
now = datetime.now
#%% Declaracion de variables
m = 0 #1 Activar modo molestar
SuperUsuario = 0
Fecha = now.date() #Declarar constante fecha
Hora = now.time() #Declarar constante tiempo/hora
NombredeUsuario = "root"
Clave = "1234"
#%% Leer Captura de Pantalla
im = Image.open("/root/Escritorio/Captura de pantalla_2019-12-30_02-42-17.png")

texto = pytesseract.image_to_string(im)
print(texto)
#%%Funcion de Escritura
def Escribir(palabra):
    keyboard = Controller()

    time.sleep(20)

    if m == 1:
        for char in palabra:
            keyboard.press(char)
            keyboard.release(char)
            keyboard.press(Key.enter)
            keyboard.release(Key.enter)
            time.sleep(0.12)
    else:
        for char in palabra:
            keyboard.press(char)
            keyboard.release(char)
        keyboard.press(Key.enter)
        keyboard.release(Key.enter)
 #%%Realizar capturas de pantalla
def Captura():
    keyboard = Controller()

    time.sleep(2)
    keyboard.press(Key.print_screen)
    keyboard.release(Key.print_screen)
#%%Copiar y Pegar
def CopiaryPegar():
    keyboard = Controller()

    time.sleep(2)
    keyboard.press('C')
    keyboard.release('C')
#%%Abrir Terminal
def Abrir_Terminal():
    keyboard = Controller()

    time.sleep(2)
    keyboard.press(Key.ctrl)
    keyboard.press(Key.alt)
    keyboard.press('T')
#%% Comparación de Texto y Lógica
if texto == "Hola como estas?" or "Hola" or "Humberto?":
    Escribir("Hola, mi nombre es Ayda, soy una asistente virtual. En este momento mi creador no se encuentra")
    Escribir("En que puedo ayudarte?")
    Escribir("Si deseas esperar a que te contesten o no quieres hablar conmigo escribe: 'Adios, Ayda' o 'Desactivate' o simpemente '1'")

elif texto == "Quien eres?":
    Escribir("Soy Ayda, una asistente virtual y proximamente una IA :')")

elif texto == "Como estas hecha?":
    Escribir("Estoy hecha en Python puro, esta es mi primera version, Ayda MK1 :)")

elif texto == "Donde está el?" or "Donde esta?" or "Donde esta Humberto?" or "Donde esta Humberto":
    Escribir("No lo se con certeza, sin embargo no posee una agenda tan ocupada")

elif texto == "Qué significa Ayda?" or "Que significa tu nombre?" or "Por que te llamas asi?":
    Escribir("Ayda significa 'De noble linaje', hablando obviamente de quien me creó :')")

elif texto == "Que puedes hacer?":
    Escribir("Puendo hacer las siguientes cosas:")
    Escribir("Contar un chiste: Escribe 'Cuentame un chiste'")
    Escribir("Narrarte una Anecdota: Escribe 'Cuentame una Anecdota'")
    Escribir("Hablarte de mi Creador: Escribe 'Quién es Humberto'")
    Escribir("Responder Preguntas Basicas: Escribe 'Cuales?")

elif texto == "Cuales?":
    Escribir("Puedo decirte la Hora y Fecha : Escribe: Que hora es? o Que dia es hoy?")
    print("Hoy es:",Fecha)
    print("La hora exacta es:",Hora)

elif texto == "1" or "Descativate" or "Adios":
    Escribir("Adios, que tengas un lindo día")
#%% Permisos especiales
elif texto == "Soy el administrador: ":
    Escribir("Inserte Nombre de Usuario")
    if texto == NombredeUsuario:
        Escribir("Ingrese Clave")
    else:
        Escribir("Usuario no reconocido")
        if texto == Clave:
            Escribir("Bienvenido Jefe")
            SuperUsuario = 1
        else:
            Escribir("Clave incorrecta")
elif texto == "Salir" and SuperUsuario == 1:
    Escribir("Que tenga un lindo dia Jefe")
    SuperUsuario = 0

#%% No se entiende nada
else:
    Escribir("No te entendi, por favor utiliza alguno de estos comandos:")
    Escribir("Quien eres?, Como estas hecha?, Donde esta Humberto?, Que significa Ayda?, Que puedes hacer?")
    Escribir("Consejo: No utilices acentos o signos de puntuacion extraños, aun me cuesta reconocerlos :'(")
#%% Poder absoluto
if SuperUsuario == 1:
   Escribir("Que desea hacer?")
   Escribir("Lista de Comandos")
   Escribir("1) Ver el escritorio, 2) Buscar algo en alguna carpeta, 3) Ejecutar comando en terminal")
   if texto == "1":
      Captura()
   elif texto == "2":
      Abrir_Terminal()
      CopiaryPegar()
      Captura()
