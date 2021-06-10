/*
Realize un programa que defina dos vectores de caracteres y 
despues almacene el contenido de ambos vectores en un nuevo 
vector, situando en primer lugar los elementos del primer 
vector seguido por los elementos del segundo vector. 
Muestre el contenido del nuevo vector en la salida estandar
*/

#include <iostream>
#include <conio.h>
using namespace std;
 int main()
{
	char letra1[10]={'h','o','l','a',' ','s','o','y',' ','1'},letra2[10]={'h','o','l','a',' ','s','o','y',' ','2'}, v3[20];
	//cout <<"introduzca el primer vector : ";cin>>letra1;
	//cout <<"introduzca el segundo vector : ";cin>>letra2;
	
	for(int i=0; i<10;i++)
	{
	    v3[i]=letra1[i];
	}
	
	for(int i=10; i<20;i++)
	{
	   v3[i]=letra2[i-10];
	}
	 cout<<"el tercer vector es: "<<v3;
	
	getch();
	return 0;
}
