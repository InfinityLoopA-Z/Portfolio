/*Realice un programa que permita al usuario realizar
el calculo de cambio de divisas de pesos Ar a Dolares USD
y viceversa utilizando dos funciones, asumiendo que el valor
del dolar es de 45 ARS*/

#include <iostream>
#include <conio.h>

using namespace std;
float dolar;
float peso;
void pesos();
void dolares();
int main()
{
	char D,P,dato;
	cout<<"¿Que desea comprar? (Pulse D para dolares y pulse P para pesos Argentinos) ";cin>>dato;
	if(dato == 'D')
	{
	cout<<"Ingrese la cantidad de dolares que quiere comprar: ";cin>>dolar;
	pesos();
	}
	else {cout<<"Ingrese la cantidad de pesos que quiere comprar: "; cin>>peso;
	dolares();}
	return 0;
}

void pesos()
{
	cout<<"Usted necesita: "<<dolar*45<<" ARS";
}

void dolares()
{
	cout<<"Usted necesita: "<<peso/45<<" USD";
}
