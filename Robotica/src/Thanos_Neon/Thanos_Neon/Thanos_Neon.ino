//Bibliotecas
//#include <NewPing.h>
//#include <Servo.h>   // incluimos la biblioteca Servo 
#include <SoftwareSerial.h>
#include "IRremote.h"

//pin de recepcion de mandos del control remoto IR
int receiver = 11; 

IRrecv irrecv(receiver);     
decode_results results;   
#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
  #include <avr/power.h>
#endif
//pines de led rgb Neo
#define PIN            4
#define NUMPIXELS      8
Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

//led de la placa
#define LedF A4
#define LedD 7
#define LedI A5
//Servo
//#define ServoPala 11 
//MOTORES
#define MotorAdelanteD  9//9
#define MotorAtrasD  10//10
#define MotorAdelanteI  5//6
#define MotorAtrasI 6//5

//PWM
#define PWM_adelante 200//255
#define PWM_giro  110//178
#define PWM_giro_lento 128//70
#define PWM_atras  128//90//255
#define vel_compensatoria 150
#define velofsetderecho  0  //aumentar un numero para mermar la velocidad del motor izquierdo 
#define velofsetizquierdo  0 //aumentar un numero para mermar la velocidad del motor derecho
//Sensor de linea
#define si  2 //8 //Sensor de linea adelante izquierdo
#define sd  3 //4 //Sensor de linea adelante derecho
#define sai 4 //2 //Sensor de linea atras izquierda
#define sad 8 //3 //Sensor de linea atrasd derecha

//Detección POR INFRARROJOS 
#define IadelanteI  A3//A2//(IR-Adelante Izquierdo)
#define IadelanteD  A1//A0//(IR-Adelante Derecho)
#define IRderecha   A0//A1//(IR-Derecho)
#define IRizquierda A2//A3//(IR- Izquierdo)
#define IRfrontal A6//
//Ultrasonido
#define Trigger  13 //FRONTAL
#define MaxD 200 // Maxima distancia que detecta el ultrasonido(En Cm) 
#define Alcance 60  //Alcance para los ultrasonidos
//Start
#define Pulsador 12

//-VARIABLES---
int blanco = 0;
int negro = 1;
//Variables Linea
byte Aizquierdo = negro;
byte Aderecho  = negro;
byte AtrasI    = negro;
byte AtrasD    = negro;
//Variables IR
int Izquierda = 0;
int Derecha = 0;
int AdelanteI = 0;
int AdelanteD = 0;
int Frontal =0;
byte estrategia=1;
//
byte alcance=50;
const long referenceMv = 5000;//variable usada para calculo de la distancia Sharp

//variables usadas para cambiar los movimientos del robot aleatoriamente
unsigned long tiempoAnterior = 0;  //guarda tiempo de referencia para comparar
int periodo = 2000;  // TIEMPO QUE DURA UN MOVIMIENTO ALEATORIO DEL ROBOT
long randNumber;
//--BLUETOOTH---
int DATA_CONTROL=0;
SoftwareSerial blueToothSerial(0,1);
//Objetos de Funciones
//Servo Miservo; // Objeto para controlar el servo

//-------voids-----------
void MEDIR_DISTANCIA(void);
void lecturaUS(void);
void lecturaIR(void);
void lecturaSharp(void);
void logica(void);
void adelante(void);
void atras(void);
void izquierda(void);
void derecha(void);
void parar(void);
void sensoreslinea(void);
void Pala(void);
void Start(void);

void setup() {
  Serial.begin(9600);
  irrecv.enableIRIn();
  pixels.begin(); // This initializes the NeoPixel library.
 
  pinMode(si, INPUT);
  pinMode(sd, INPUT);
  pinMode(sai, INPUT);
  pinMode(sad, INPUT);
  pinMode(Pulsador, INPUT);
  pinMode(MotorAdelanteD, OUTPUT);
  pinMode(MotorAdelanteI, OUTPUT);
  pinMode(MotorAtrasD, OUTPUT);
  pinMode(MotorAtrasI, OUTPUT);
  
  pinMode(IadelanteI, INPUT);
  pinMode(IadelanteD, INPUT);
  pinMode(IRizquierda, INPUT);
  pinMode(IRderecha, INPUT);
  pinMode(IRfrontal, INPUT);
  
  pinMode(Trigger, OUTPUT);
  pinMode(LedF, OUTPUT);
  pinMode(LedD, OUTPUT);
  pinMode(LedI, OUTPUT);
  for(uint16_t i=0; i<NUMPIXELS; i++) {
    pixels.setPixelColor(i, pixels.Color(0,0,0));
    pixels.show();
   
  }
  ir_control();
  
  delay (5000);
   
BEGIN:  
  MEDIR_DISTANCIA();
  if(Frontal == HIGH || AdelanteI == HIGH || AdelanteD == HIGH || Derecha == HIGH || Izquierda == HIGH)
  {
    goto comenzar;
  }
  else
  {
    switch(estrategia)
    {
      case 1: derecha();
              delay(80);
              adelante();
              delay(300); 
              Serial.println("estrategia 1");
              break;
      case 2: derecha();
              delay(10);
              adelante();
              delay(300);
              Serial.println("estrategia 2");
              break;
      case 3: adelante();
              delay(500);
              Serial.println("estrategia 3");
              break;
      case 4: derecha();
              delay(100);
              adelante();
              delay(50);
              Serial.println("estrategia 4");
              break;

    }
    
    }
comenzar:
 
;  
}

void ir_control()
{
volver_1:
  if (irrecv.decode(&results)) //recibio datos del control?
   {
    switch(results.value)//que datos recibi?
    {
      case 0x00FF629D: Serial.println("Tecla: Arriba"); 
                       estrategia=1;
                       pixels.begin();
                       for(uint16_t i=0; i<NUMPIXELS; i++) {
                       pixels.setPixelColor(i, pixels.Color(0,0,0));
                       pixels.show();
                       }
                       pixels.setPixelColor(0, pixels.Color(150,0,0)); // Moderately bright green color.
                       pixels.show(); // This sends the updated pixel color to the hardware.

                       break;
      case 0x00FF22DD: Serial.println("Tecla: Izquierda");    
                       estrategia=2;
                       pixels.begin();
                       for(uint16_t i=0; i<NUMPIXELS; i++) {
                       pixels.setPixelColor(i, pixels.Color(0,0,0));
                       pixels.show();
                       }
                       pixels.setPixelColor(3, pixels.Color(0,150,0)); // Moderately bright green color.
                       pixels.show(); // This sends the updated pixel color to the hardware.
                       break;
      case 0x00FF02FD: Serial.println("Tecla: OK");
      pixels.begin();
                       for(uint16_t i=0; i<NUMPIXELS; i++) {
                       pixels.setPixelColor(i, pixels.Color(0,0,0));
                       pixels.show();
                       }
                       pixels.setPixelColor(0, pixels.Color(0,0,150)); // Moderately bright green color.
                       pixels.setPixelColor(1, pixels.Color(0,0,150)); // Moderately bright green color.                       
                       pixels.setPixelColor(2, pixels.Color(0,0,150)); // Moderately bright green color.
                       pixels.setPixelColor(3, pixels.Color(0,0,150)); // Moderately bright green color.
                       pixels.setPixelColor(4, pixels.Color(0,0,150)); // Moderately bright green color.
                       pixels.setPixelColor(5, pixels.Color(0,0,150)); // Moderately bright green color.                       
                       pixels.setPixelColor(6, pixels.Color(0,0,150)); // Moderately bright green color.
                       pixels.setPixelColor(7, pixels.Color(0,0,150)); // Moderately bright green color.
                       pixels.show(); // This sends the updated pixel color to the hardware.
    
                       goto regresar;
                       break;
      case 0x00FFC23D: Serial.println("Tecla: Derecha");   
                       estrategia=4;
                       pixels.begin();
                       for(uint16_t i=0; i<NUMPIXELS; i++) {
                       pixels.setPixelColor(i, pixels.Color(0,0,0));
                       pixels.show();
                       }
                       pixels.setPixelColor(1, pixels.Color(0,0,150)); // Moderately bright green color.
                       pixels.show(); // This sends the updated pixel color to the hardware.

                       break;
      case 0x00FFA857: Serial.println("Tecla: Abajo"); 
                       estrategia=3;
                       pixels.begin();
                       for(uint16_t i=0; i<NUMPIXELS; i++) {
                       pixels.setPixelColor(i, pixels.Color(0,0,0));
                       pixels.show();
                       }
                       pixels.setPixelColor(2, pixels.Color(150,150,0)); // Moderately bright green color.
                       pixels.show(); // This sends the updated pixel color to the hardware.

                       break;
      case 0x00FF6897: Serial.println("Tecla: 1");    
                       goto regresar;
                       break;
      case 0x00FF9867: Serial.println("Tecla: 2");    
                       goto regresar;
                       break;
      case 0x0FFB04F:  Serial.println("Tecla: 3");    
                       MEDIR_DISTANCIA();
                        if(Frontal == HIGH)
                          {
                            pixels.begin();
      for(uint16_t i=0; i<NUMPIXELS; i++) {
      pixels.setPixelColor(i, pixels.Color(0,0,0));
      pixels.show();
      }
      pixels.setPixelColor(3, pixels.Color(150,0,0)); // Moderately bright green color.
      pixels.setPixelColor(4, pixels.Color(150,0,0)); // Moderately bright green color.
      pixels.show(); // This sends the updated pixel color to the hardware.
      delay (500);
      
  }
                       
                       break;
     }
    irrecv.resume();
  }
  //*
  
  
/*  if(AdelanteD == HIGH)
  {
      pixels.begin();
      for(uint16_t i=0; i<NUMPIXELS; i++) {
      pixels.setPixelColor(i, pixels.Color(0,0,0));
      pixels.show();
      }
      pixels.setPixelColor(1, pixels.Color(150,0,0)); // Moderately bright green color.
      pixels.setPixelColor(2, pixels.Color(150,0,0)); // Moderately bright green color.
      pixels.show(); // This sends the updated pixel color to the hardware.
      goto volver_1;
  }
      else{ for(uint16_t i=0; i<NUMPIXELS; i++) {
      pixels.setPixelColor(i, pixels.Color(0,0,0));
      pixels.show();}
      goto volver_1;
      }
  }
  if(AdelanteI == HIGH)
  {
      pixels.begin();
      for(uint16_t i=0; i<NUMPIXELS; i++) {
      pixels.setPixelColor(i, pixels.Color(0,0,0));
      pixels.show();
      }
      pixels.setPixelColor(5, pixels.Color(150,0,0)); // Moderately bright green color.
      pixels.setPixelColor(6, pixels.Color(150,0,0)); // Moderately bright green color.
      pixels.show(); // This sends the updated pixel color to the hardware.
      goto volver_1;
  }
  else{ for(uint16_t i=0; i<NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(0,0,0));
        pixels.show();}
        goto volver_1;
      }
  
  if(Derecha == HIGH)
  {
      pixels.begin();
      for(uint16_t i=0; i<NUMPIXELS; i++) {
      pixels.setPixelColor(i, pixels.Color(0,0,0));
      pixels.show();
      }
      pixels.setPixelColor(0, pixels.Color(150,0,0)); // Moderately bright green color
      pixels.show(); // This sends the updated pixel color to the hardware.
      goto volver_1;
  }
  else{ for(uint16_t i=0; i<NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(0,0,0));
        pixels.show();}
        goto volver_1;
      }

  if(Izquierda == HIGH)
  {
      pixels.begin();
      for(uint16_t i=0; i<NUMPIXELS; i++) {
      pixels.setPixelColor(i, pixels.Color(0,0,0));
      pixels.show();
      }
      pixels.setPixelColor(7, pixels.Color(150,0,0)); // Moderately bright green color
      pixels.show(); // This sends the updated pixel color to the hardware.
      goto volver_1;
  }
  else{ for(uint16_t i=0; i<NUMPIXELS; i++) {
        pixels.setPixelColor(i, pixels.Color(0,0,0));
        pixels.show();}
        goto volver_1;
      }
     //*/
 goto volver_1;
regresar:
;  
}

void loop() {
  prueba_motores();
  //sensoreslinea ();
  //MEDIR_DISTANCIA();
  //logica ();
}

void prueba_motores()
{
 
 adelante();
 delay(2000);
 atras();
 delay(2000);
 derecha();
 delay(2000);
 izquierda();
 delay(2000);
  /* 
  
  izquierda_lento();
  delay(3000);
  derecha_lento();
  delay(3000);
  //*/

}
void logica () 
{
  if (Frontal == HIGH || AdelanteI == HIGH || AdelanteD == HIGH || Derecha == HIGH || Izquierda == HIGH)
 { //*atacar si detecto con los 2 frontales
  if (Frontal == HIGH )
  {  
      adelante();//atacar
      delay(10);
jmp_10:sensoreslinea(); 
      MEDIR_DISTANCIA();
   if (Frontal == HIGH )//detecto con los frontales?
      { //Serial.println("Atacar"); 
        goto jmp_10;
      }
      else
      { //atras();
        delay(10);
        goto salir_1;
       }
        
   }
//* 
 //---------------FASE DE PERSECUCION------------------------------------------
  if (AdelanteI == LOW && AdelanteD == HIGH)
  { //detecte al oponente con el frontal derecho fase de busqueda
    //Serial.println("detecte con el frontal DERECHO");
    derecha_lento();
jmp_20:    
    sensoreslinea (); 
    MEDIR_DISTANCIA();
    if (Frontal == HIGH )
     { //VOY A ATACAR AL OPONENTE
       //delay(300);
       adelante();
       goto jmp_10; 
     }
     else
     {//DETECTO CON EL FRONTAL izquierdo?
      if (AdelanteI == HIGH && AdelanteD == LOW )
        { //Serial.println("detecte con el frontal IZQUIERDO"); 
          izquierda_lento();
          goto jmp_21;
        }
        else
        {    if(Izquierda == HIGH && AdelanteD == LOW  )
           { //Serial.println("LO DETECTE A LA IZQUIERDA"); 
             izquierda();
             goto jmp_11;
           }
          else
          { //MEDIR_DISTANCIA();
            if(Derecha == HIGH && AdelanteD == LOW )
             {//Serial.println("LO DETECTE A LA DERECHA");  
              derecha();
               goto jmp_12;
             }
            
          }
        } 
     }
    derecha_lento();//VER SI ESTA BIEN
    goto jmp_20;
 
  }
//-------------------FASE DE PERSECUCION-------------------------------------------------
   if (AdelanteI == HIGH && AdelanteD == LOW)
   {//detecte al oponente con el frontal izquierdo FASE DE BUSQUEDA
    //Serial.println("DETECTE CON EL FRONTAL A LA IZQUIERDA"); 
    izquierda_lento();
jmp_21:    
    sensoreslinea(); 
    MEDIR_DISTANCIA();
    if (Frontal == HIGH )
     { //Serial.println("Atacar"); 
       //delay(300);
       adelante();
       goto jmp_10; 
     }
     else
     {
      if (AdelanteI == LOW && AdelanteD == HIGH)
      { //Serial.println("DETECTE CON EL FRONTAL DERECHO"); 
        derecha_lento();
        goto jmp_20;
      }
      else
      { //MEDIR_DISTANCIA();
        if(Derecha == HIGH)
        { //Serial.println("detecte al oponente a la derecha"); 
          derecha();
          goto jmp_12;
          }
        else
        {
         if(Izquierda == HIGH)
          { //Serial.println("detecte al oponente a la izquierdo"); 
            izquierda();
           goto jmp_11 ;
          }
          
        }
      }//---------
    }
    izquierda_lento();
    goto jmp_21; 
   }
//*/
   //++++++++++busco si lo detecto a la izquierda++++++++++++++++++++++++
      if (Izquierda ==HIGH )//es por que estoy detectando a la izquierda
      {   //Serial.println("detecte al oponente a la izquierda"); 
          izquierda();
          delay(10);
jmp_11:   sensoreslinea (); 
          MEDIR_DISTANCIA();
          if (Frontal == HIGH )
            { //Serial.println("Atacar"); 
              adelante();
              goto jmp_10;
            }
          else
          { //atras();
            if (Derecha == HIGH)//OPONENTE A LA DERECHA
              { //Serial.println("detecte al oponente a la derecha");  
                derecha();
                 goto jmp_12;      
              }
              else
              {
                if(AdelanteI == HIGH && Izquierda == LOW )
                { //Serial.println("detecte con el frontal izquierdo"); 
                  izquierda_lento();
                  goto jmp_21 ;
                }
                else
                { 
                  if(AdelanteD == HIGH && Derecha == LOW )
                  { //Serial.println("detecte con el frontal derecho"); 
                    derecha_lento();
                    goto jmp_20 ;
                  }
                 }              
                izquierda();
                goto jmp_11;
              }
           }
        izquierda();
       }
//*
  //#######################################################################
  if (Derecha == HIGH)//OPONENTE A LA DERECHA
  {   //Serial.println("detecte al oponente a la derecha"); 
      derecha();
      delay(10);
jmp_12:sensoreslinea (); 
      MEDIR_DISTANCIA();
   if (Frontal == HIGH )
      { //Serial.println("Atacar"); 
        adelante();
        goto jmp_10;
      }
      else
      { 
        if (Izquierda == HIGH )//es por que estoy detectando a la izquierda
           { //Serial.println("detecte a la izquierda"); 
             izquierda();
             goto jmp_11;
           }
         else
         { if(AdelanteI == HIGH && Izquierda == LOW )
            { //Serial.println("detecte con el frontal izquierdo"); 
              izquierda_lento();
              goto jmp_21 ;
             }
           else
             { if(AdelanteD == HIGH && Derecha == LOW )
                  { //Serial.println("detecte con el frontal derecho"); 
                    derecha_lento();
                    goto jmp_20 ;
                  }
             }      
           derecha();
           goto jmp_12;
         }
       }
     derecha();   
   }
     
  //*/
   
 }
 else
 {//movimientos aleatorios cada un tiempo prefijado MEJORAR
 salir_1:
  derecha_lento();
  //Serial.println("perdi al oponente"); 
   
 }
  

}

void MEDIR_DISTANCIA(){
   lecturaIR();
   //lecturaUS();
   //lecturaSharp();
}
void lecturaIR() {
  AdelanteI = digitalRead(IadelanteI);
  AdelanteD = digitalRead(IadelanteD);
  Derecha= digitalRead(IRderecha);
  Izquierda= digitalRead(IRizquierda);
  Frontal= analogRead(IRfrontal);
//INVIERTO LA LOGICA DE DETECCION DE LOS IR    
  if (Frontal > 100)
  { Frontal = LOW;
  }
  else {
    Frontal = HIGH;
  }
  if (AdelanteI == HIGH)
  { AdelanteI = LOW;
  }
  else {
    AdelanteI = HIGH;
  }
  if (AdelanteD == HIGH)
  { AdelanteD = LOW;
  }
  else {
    AdelanteD = HIGH;
  }
//*
  if (Derecha == HIGH)
  { Derecha = LOW;
  }
  else {
    Derecha = HIGH;
  }
  if (Izquierda == HIGH)
  { Izquierda = LOW;
  }
  else {
    Izquierda = HIGH;
  }
  //*/
//ENCIENDO LOS LEDS DE LA PLACA  
//*  
  if (AdelanteI ==HIGH ||  AdelanteD == HIGH ||  Frontal == HIGH) {
    digitalWrite(LedF, HIGH);
    
  }
  else {
    digitalWrite(LedF, LOW);
  }
//*  
  if (Derecha == HIGH) {
    digitalWrite(LedD, HIGH);
  }
  else {
    digitalWrite(LedD, LOW);
  }
  
  if (Izquierda == HIGH) {
    digitalWrite(LedI, HIGH);
  }
  else {
    digitalWrite(LedI, LOW);
  }
//*/
 //Serial.println("AdelanteI");
 //Serial.println("AdelanteD");
 

}
void lecturaUS(){
  //Midiendo distancia
  //UltrasonidoI = Ultra1.ping_cm(); //Ultrasonido Izquierdo
  delay (5);
  //UltrasonidoD = Ultra2.ping_cm(); //Ultrasonido Derecho
  delay (5);
 // Serial.print("UltrasonidoI=");
 // Serial.print(UltrasonidoI);
 // Serial.print("UltrasonidoD=");
 // Serial.println(UltrasonidoD);

}
void lecturaSharp()
{ int val=0;
  int mV =0;
/*  
  val= analogRead(IadelanteI);
  mV = (val * referenceMv) / 1023;
  AdelanteI = getDistance(mV);//mido distancia con sensor frontal izquierdo
  
  val = analogRead(IadelanteD);
  mV = (val * referenceMv) / 1023;
  AdelanteD = getDistance(mV);//mido distancia con sensor frontal derecho
  */
  val = analogRead(IRderecha);
  mV = (val * referenceMv) / 1023;
  Derecha = getDistance(mV);//mido distancia con sensor derecho
  
  val = analogRead(IRizquierda);
  mV = (val * referenceMv) / 1023;
  Izquierda = getDistance(mV);//mido distancia con sensor izquierdo
  //---------------------------------------------------------------
  //digitalizo los valores analogicos    
 /* if (AdelanteI < alcance)
  { AdelanteI = HIGH;
  }
  else {
    AdelanteI = LOW;
  }
  if (AdelanteD < alcance)
  { AdelanteD = HIGH;
  }
  else {
    AdelanteD = LOW;
  }
   */
  if (Derecha < alcance)
  { Derecha = HIGH;
  }
  else {
    Derecha = LOW;
  }
  if (Izquierda < alcance)
  { Izquierda = HIGH;
  }
  else {
    Izquierda = LOW;
  }

  //ENCIENDO LOS LEDS DE LA PLACA  
/*  if (AdelanteI ==HIGH ||  AdelanteD == HIGH) {
    digitalWrite(LedF, HIGH);
    
  }
  else {
    digitalWrite(LedF, LOW);
  }
  */
  if (Derecha == HIGH) {
    digitalWrite(LedD, HIGH);
  }
  else {
    digitalWrite(LedD, LOW);
  }
  if (Izquierda == HIGH) {
    digitalWrite(LedI, HIGH);
  }
  else {
    digitalWrite(LedI, LOW);
  }

 //Serial.println("AdelanteI");
 //Serial.println("AdelanteD");

  
}

//interpolación de la distancia a intervalos de 250mV
const int TABLE_ENTRIES = 12;
const int INTERVAL  = 250;
static int distance[TABLE_ENTRIES] = {150,140,130,100,60,50,40,35,30,25,20,15};
int getDistance(int mV) 
{
  if (mV > INTERVAL * TABLE_ENTRIES - 1)      return distance[TABLE_ENTRIES - 1];
  else {
    int index = mV / INTERVAL;
    float frac = (mV % 250) / (float)INTERVAL;
    return distance[index] - ((distance[index] - distance[index + 1]) * frac);
  }
}

void sensoreslinea () {
  //Lectura de sensores de detección
  Aizquierdo = digitalRead(si);
  Aderecho =   digitalRead(sd);
  //AtrasI =     digitalRead(sai);
  //AtrasD =     digitalRead(sad);
 /* 
 Serial.print(Aizquierdo);
  Serial.print("   ");
  Serial.print(Aderecho);
  Serial.print("   ");
  Serial.print(AtrasI);
  Serial.print("   ");
  Serial.println(AtrasD);
  
 
  ;//*/
  if (AtrasD == negro && AtrasI == negro && Aizquierdo == negro && Aderecho == negro) {

    goto salir_1;

  }

  if (Aderecho == blanco || Aizquierdo == blanco )
  {
    atras();
    delay(300);
   // Serial.print("ATRAS   ");

  }
/*
  if (AtrasI == blanco || AtrasD == blanco)
  {
    adelante();
    delay(300);
  }
//*/


salir_1:
  ;
}
//---FUNCIONES--------------
void atras() {
  analogWrite(MotorAdelanteD, 0);
  analogWrite(MotorAdelanteI, 0);
  analogWrite(MotorAtrasD, PWM_atras);
  analogWrite(MotorAtrasI, PWM_atras);

}
void adelante() {
  analogWrite(MotorAdelanteD, PWM_adelante);
  analogWrite(MotorAdelanteI, PWM_adelante);
  analogWrite(MotorAtrasD, 0);
  analogWrite(MotorAtrasI, 0);

}
void derecha() {
  analogWrite(MotorAdelanteD, PWM_giro );
  analogWrite(MotorAdelanteI, 0);
  analogWrite(MotorAtrasD, 0);
  analogWrite(MotorAtrasI, PWM_giro + vel_compensatoria);
}
void derecha_lento() {
  analogWrite(MotorAdelanteD, PWM_giro_lento );
  analogWrite(MotorAtrasD, 0);
  analogWrite(MotorAdelanteI, 0);
  analogWrite(MotorAtrasI, 0);
}
void izquierda() {
  analogWrite(MotorAdelanteD, 0);
  analogWrite(MotorAdelanteI, PWM_giro );
  analogWrite(MotorAtrasD, PWM_giro );
  analogWrite(MotorAtrasI, 0);

}
void izquierda_lento() {
  analogWrite(MotorAdelanteD, 0);
  analogWrite(MotorAtrasD, 0);
    analogWrite(MotorAdelanteI, PWM_giro_lento - velofsetizquierdo);
  analogWrite(MotorAtrasI, 0);

}
void parar() {

  analogWrite(MotorAdelanteD, 0);
  analogWrite(MotorAdelanteI, 0);
  analogWrite(MotorAtrasD, 0);
  analogWrite(MotorAtrasI, 0);

}

void Pala() {

  //Miservo.write(0);
  delay(250); //  Posiciona al servo
  //Miservo.detach() ;
}
