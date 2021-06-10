#include<iostream>
#include<conio.h>

using namespace std;

//declarar la estructura de la funcion
int suma (int x,int y);

int main (){
   int a, b, sumar;
   cout<<" ingrese dos numeros: ";
   cin>>a>>b;
   sumar=suma (a,b);//llamo a la funcion suma 
   cout<<"el resultado de la suma es: "<<sumar;
   getch();
   return 0;
}
int suma (int x,int y)
{
	int sum ;
	sum = x+y;
	
	return sum;
}
