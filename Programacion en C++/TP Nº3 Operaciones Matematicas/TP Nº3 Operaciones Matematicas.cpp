/* Escriba un programa quye lea la entrada estandar de dos numeros
y muestra por pantalla la suma, resta, multiplicaci�n, divisi�n
*/

#include <iostream>
using namespace std;

int main()
{
	int n1, n2, Sum= 0, Res = 0, Mul = 0, Div = 0;
	cout<< "digite el 1� Numero: "; cin>>n1;
	cout<< endl<< "digite el 2� Numero: "; cin>>n2;
	Sum = n1+n2;
	Res = n1-n2;
	Mul = n1*n2;
	Div = n1/n2;
	cout<< "Suma: " <<Sum<<endl;
	cout<< "Resta: "<<Res<<endl;
	cout<< "Multiplicacion: "<<Mul<<endl;
	cout<< "Division: "<<Div<<endl;
	return 0;
}
