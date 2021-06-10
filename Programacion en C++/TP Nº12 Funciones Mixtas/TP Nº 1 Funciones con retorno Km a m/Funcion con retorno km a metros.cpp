/*
Crear una funcion que sea capaz de convertir un dato
expresado en km a metros
*/
#include <iostream>
#include <conio.h>

using namespace std;
float metros(float x);
int main()
{
	float km, m;
	cout<<"Ingrese la unidad en km: ";cin>>km;
	m = metros(km);
	cout<<"El resultado en metros es: "<<m;
	return 0;
}
float metros(float x)
{
	float metros;
	metros = x*1000;
	return metros;
}
