/*
escribe un programa que defina un vector de numeros y
calcule la suma de sus elementos
*/
#include <iostream>
#include <conio.h>
using namespace std;
int main ()
{
    int numeros [5]={0,0,0,0,0}, suma;
    for  (int i=0;i<5;i++){
      cout <<"introduzca el "<<i+1<<"º valor : "; cin >>numeros [i] ;
	
	}
    suma = numeros [0] + numeros [1] + numeros [2] + numeros [3] + numeros [4]; 
    cout <<"la suma es = "<<suma;
    getch();
    return 0;
}
