/*
Realice un programa que use una funcion para leer dos numeros
enteros leer_datos(); y realice otra funcion encargada de 
realizar la multiplicacion de dos numeros mult();
*/
#include <iostream>
#include <conio.h>
using namespace std;
void leer_datos();
void mult();
int n1, n2;//variable global

int main (){
	leer_datos();
	mult();	
	getch();
	return 0;
}

void leer_datos(){
	cout<<"Introduzca dos numeros: "; cin>>n1>>n2;
}
void mult(){
	cout<<"El resultado de la multiplicacion es: "<<n1*n2;	
}
