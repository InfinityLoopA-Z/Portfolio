/*
Escriba un programa que lea la entrada estandar un vector de numeros y
muestre en la salida estandar los numeros del vector con sus indices 
asociados.
*/

#include <iostream>
#include <conio.h>
using namespace std;
int main ()
{
    int numeros [5]={22,55,10,9,8};
    for (int i=0; i<5;i++)
    {
     cout <<"El valor " <<i+1<< " corresponde a "; cout<<numeros[i]<<endl;
    }
    getch();
    return 0;
}
