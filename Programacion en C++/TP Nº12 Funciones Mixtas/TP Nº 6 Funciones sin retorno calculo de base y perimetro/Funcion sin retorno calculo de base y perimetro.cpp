#include <iostream>
#include <conio.h>

using namespace std;

float perimetro, area;

void num(float x, float y);

int main()
{
	float n1, n2;
	cout<<"Ingrese el valor de la base y la altura: ";cin>>n1>>n2;
	num(n1, n2);
	cout<<"El area es: "<<area<<endl;
	cout<<"El perimetro es: "<<perimetro<<endl;
}

void num(float x, float y)
{
	area = x * y;
	perimetro = (2*x) + (2*y);
}
