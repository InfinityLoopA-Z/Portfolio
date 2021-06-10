/*
Diseñar una funcion que sera capaz de entregar el valor absoluto de un numero entero
*/

#include <iostream>
#include <conio.h>
#include <stdlib.h>

using namespace std;
int numero_abs(int b);

int main ()
{
	int a, numero_a;
	cout<<"Ingrese un numero: ";cin>>a;
	numero_a = numero_abs(a);
	cout<<"El valor absoluto del numero es: "<<numero_a;
	getch();
	return(0);
}
	int numero_abs(int b)
	{
		b= abs(b);
		return b;
/*		
		if(b<0)
		{
			b=b*(-1);
		}
		return b;
*/
	}
