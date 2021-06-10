/*Realizar un programa que permita al usuario calcular la potencia que
el usuario desee  y la raiz cuadrada del numero que ingreso utilizando
dos funciones*/

#include <iostream>
#include <conio.h>
#include <math.h>
float v1,v2,numero1,n1;
float raiz(float x);
void potencia();
using namespace std;

int main()
{
	float numero;
	cout<<"Ingrese un numero: ";cin>>numero;
	n1 = numero;
	numero = raiz(numero);
	cout<<"Ingrese el valor de la potencia: ";cin>>v2;
	cout<<"El valor de la raiz cuadrada del numero es: "<<numero<<endl;
	potencia();
	cout<<"El valor de la potencia del numero es: "<<numero1<<endl;
	return 0;
}

float raiz(float x)
{
	int n;
	n =sqrt(x); //el comando sqrt permite calcular la raiz cuadrada del numero o variable que se encuentre dentro de el
	return n;
}

void potencia()
{ 
	numero1 = pow(n1,v2); //el comando pow esta formado de la siguiente forma pow(numero o variable que se desea elevar, exponente de la potencia
}

