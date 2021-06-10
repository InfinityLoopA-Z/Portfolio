/*
Realice un programa que permita ingresar los datos del usuario 
(nombre y apellido) por la entrada estandar y que permita dejar
al usuario un mensaje. Imprimir datos en la salida estandar. 
utilizando la funcion cin.getline. 

Estructura de la funcion cin.getline:
cin.getline(variable char, valor maximo del array de esa variable,'\n')
ej: cin.getline(nombre,50,'\n');
*/
#include <iostream>
#include <conio.h>
#include <string.h>
using namespace std;

int main (){
	char palabras1[50], palabras2[50];
	cout<<"Ingrese el primer nombre: "; 
	cin.getline(palabras1,50,'\n');
	cout<<"Ingrese el apellido: ";
	cin.getline(palabras2,50,'\n'); 
	
	cout<<"Nombre: "<<palabras1<<endl;
	cout<<"Apellido: "<<palabras2<<endl;
	
	char mensaje[30];
	cout<<"Ingrese un mensaje (max. 30): "<<endl;
	cin.getline(mensaje,30,'\n');
	cout<<"Su mensaje fue: "<<mensaje;
	
	getch ();
	return 0;
}

