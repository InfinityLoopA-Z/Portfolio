/*Desarroolle un programa que lea de la entrada estandar un 
vector de enteros y determine el mayor elemento del vector*/

#include <iostream>
#include <conio.h>
using namespace std;

int main()
{
	int numeros [100], mayor = 0,n;
    cout <<"introduzca la cantidad de numeros del vector Max 100: ";
    cin >>n;
	for  (int i=0;i<n;i++){
    cout <<"introduzca el "<<i+1<<"º valor : "; cin >>numeros [i] ;
	}

    for (int i=0;i<n;i++)
      {
      	if(numeros[i]>mayor)
          {
          	mayor = numeros [i];
          }
          
      }
   
	cout <<endl<<"Este es el numero mayor: "<<mayor;
	getch();
}



