/*
Realizar un programa que permita al usuario ingresar
la cantidad de horas que trabaja y el monto por hora.
Calcular mediante una funcion el salario mensual, 
asumiendo que trabaja todos los dias.
*/


#include <iostream>
#include <conio.h>
void salario();
using namespace std;
int horas;
float valor;

int main()
{
	cout<<"Ingrese la cantidad de horas diarias y el valor monetario de cada hora: ";cin>>horas>>valor;
	salario();
	return 0;
}

void salario()
{
	cout<<"Su salario sera de: "<<horas*valor*30;
}
