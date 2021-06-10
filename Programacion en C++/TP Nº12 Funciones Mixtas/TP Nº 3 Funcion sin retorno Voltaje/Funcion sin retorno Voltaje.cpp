/*Realizar un programa que le permita al usuario ingresar el valor
de la tension domiciliaria de Argentina y mediante una funcion
indicarle si es correcto o no el valor que coloco*/
#include <iostream>
#include <conio.h>
int voltaje;
void incorrecto();
void correcto();

using namespace std;

int main()
{
	cout<<"Ingrese el valor de la tension Domiciliaria de Argentina: "; cin>>voltaje;
	if(voltaje != 220)
	{
		incorrecto();
	}	
	else{correcto();}
	return 0;
}

void incorrecto()
{
	cout<<"El voltaje que usted ingreso es incorrecto: ";
}

void correcto()
{
	cout<<"El voltaje que usted ingreso es correcto";
}
