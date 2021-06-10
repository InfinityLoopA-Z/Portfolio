#include <Adafruit_GFX.h>  // Include core graphics library for the display
#include <Adafruit_SSD1306.h>  // Include Adafruit_SSD1306 library to drive the display
#include "MAX30100_PulseOximeter.h"
#include <SparkFun_APDS9960.h>
#include "BluetoothSerial.h"

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif
BluetoothSerial SerialBT;
Adafruit_SSD1306 display(128, 64);  // Create display

#include <Fonts/FreeMonoBold12pt7b.h>  // Add a custom font
#include <Fonts/FreeMono9pt7b.h>  // Add a custom font

#define REPORTING_PERIOD_MS 1000
// Pins
#define APDS9960_INT    23 // Needs to be an interrupt pin

//----------- Global Variables------------------------------
char buffer[10];//
SparkFun_APDS9960 apds = SparkFun_APDS9960();
int isr_flag = 0;

int Variable1;     // Create a variable to have something dynamic to show on the display
int pulsos,oxigeno;//
//char alarma = V;
PulseOximeter pox; //constructor
uint32_t tsLastReport = 0;
const unsigned char CORAZON [] PROGMEM=
{
0x00, 0x00, 0x00, 0x00, 0x01, 0x80, 0x18, 0x00, 0x0f, 0xe0, 0x7f, 0x00, 0x3f, 0xf9, 0xff, 0xc0,
0x7f, 0xf9, 0xff, 0xc0, 0x7f, 0xff, 0xff, 0xe0, 0x7f, 0xff, 0xff, 0xe0, 0xff, 0xff, 0xff, 0xf0,
0xff, 0xf7, 0xff, 0xf0, 0xff, 0xe7, 0xff, 0xf0, 0xff, 0xe7, 0xff, 0xf0, 0x7f, 0xdb, 0xff, 0xe0,
0x7f, 0x9b, 0xff, 0xe0, 0x00, 0x3b, 0xc0, 0x00, 0x3f, 0xf9, 0x9f, 0xc0, 0x3f, 0xfd, 0xbf, 0xc0,
0x1f, 0xfd, 0xbf, 0x80, 0x0f, 0xfd, 0x7f, 0x00, 0x07, 0xfe, 0x7e, 0x00, 0x03, 0xfe, 0xfc, 0x00,
0x01, 0xff, 0xf8, 0x00, 0x00, 0xff, 0xf0, 0x00, 0x00, 0x7f, 0xe0, 0x00, 0x00, 0x3f, 0xc0, 0x00,
0x00, 0x0f, 0x00, 0x00, 0x00, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
};
//++++++++++++++++++ACERCA DE +++++++++++++++++++++++++++++++++++

//*********************************


void onBeatDetected()
{
  Serial.println("LATIDOS DETECTADOS!");
  if(pulsos> 10){
  display.drawBitmap( 40, 10, CORAZON, 28, 28, 1);
  display.display();
  }
  else
  {
    display.drawBitmap( 40, 10, CORAZON, 28, 28, 1);
  }
  
}

void setup()  // 
{                
  delay(100);  // This delay is needed to let the display to initialize
  Serial.begin(115200);
  Wire.begin(4, 15);
  pinMode(16,OUTPUT);
  digitalWrite(16,HIGH); //reset pin must be high for screen to run
  
  init_bluetooth(); //inicializo el bluetooth
  init_oled_extern();//inicializo al OLED  
  init_gesture();//inicializo al sensor de gestos
  init_pulsioximeter();//inicializo al pulsioximetro
} 

void loop()  // Start of loop
{
  pulsioximter();
  detect_gestos();
  enviar_datos_bth();
  Variable1++;  // Increase variable by 1
  if(Variable1 > 150)  // If Variable1 is greater than 150
  {
    Variable1 = 0;  // Set Variable1 to 0
  }
  // Convert Variable1 into a string, so we can change the text alignment to the right:
  // It can be also used to add or remove decimal numbers.
  char string[10];  // Create a character array of 10 characters
  // CONVERTIR DE FLOAT A STRING:
  // (<variable>,<cantidad de dígitos que vamos a usar>,<cantidad de dígitos decimales>,<NOMBRE DEL string>)
  dtostrf(Variable1, 3, 0, string); 
   
  display.clearDisplay();  // Clear the display so we can refresh
  display.setFont(&FreeMono9pt7b);  // Set a custom font
  display.setTextSize(0);  // Set text size. We are using a custom font so you should always use the text size of 0
  // Print text:
  display.setCursor(0, 10);  // (x,y)
  display.println("BPM");  // Text or value to print
  display.setCursor(0, 55);  // (x,y)
  display.println("SpO2");  // Text or value to print
  
  // Draw rectangle:
  display.drawRect(79, 0, 49, 27, WHITE); // Draw rectangle (x,y,width,height,color)
                                          // It draws from the location to down-right
   display.setFont(&FreeMonoBold12pt7b);  // Set a custom font
  // Print variable with left alignment:
  display.setCursor(83, 20);  // (x,y)
  display.println(pulsos);//Variable1);  // Text or value to print
  // Draw rounded rectangle:
  display.drawRoundRect(79, 37, 49, 27, 8, WHITE);  // Draw rounded rectangle (x,y,width,height,radius,color)
                                                    // It draws from the location to down-right
  // Print variable with right alignment:
  display.setCursor(83, 57);  // (x,y)
  display.println(oxigeno);  // Text or value to print
  display.display();  // Imprime todo lo que configuramos previamente

}
//++++++++++DETECCION DE PULSOS Y OXIGENO+++++++++++++++++++
void pulsioximter(){
  pox.update();
  if (millis() - tsLastReport > REPORTING_PERIOD_MS) 
  {
   onBeatDetected();
   Serial.print("Heart BPM:");
   Serial.print(pox.getHeartRate());
   Serial.print("-----");
   Serial.print("Oxygen Percent:"); 
   Serial.print(pox.getSpO2());
   Serial.println("\n");
   pulsos=pox.getHeartRate();
   oxigeno=pox.getSpO2();
   tsLastReport = millis();
}
}
void init_pulsioximeter(){
  if (!pox.begin()) 
  {
    Serial.println("FALLA NO SE PUDO INIZIALIZAR EL SENSOR DE PULSOS");
    for(;;);
   }
   else 
   {
    Serial.println("SENSOR DE PULSOS INICIALIZADO CORRECTAMENTE");
   }
   pox.setOnBeatDetectedCallback(onBeatDetected);

}
void init_oled_extern(){
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);  // Initialize display with the I2C address of 0x3C
  display.clearDisplay();  // Clear the buffer
  display.setTextColor(WHITE);  // Set color of the text
  display.setRotation(0);  // Set orientation. Goes from 0, 1, 2 or 3
  display.setTextWrap(false);  // Por defecto, las líneas largas de texto están 
  //configuradas para "ajustarse" automáticamente a la columna más a la izquierda.
  // Para anular este comportamiento (para que el texto se ejecute en el lado derecho
  //de la pantalla, útil para desplazar efectos de marquesina), use setTextWrap(false). 
   display.dim(0);  //Set brightness (0 is maximun and 1 is a little dim)
}
//++++++++++DETECCION DE GESTOS+++++++++++++++++++++++++++++
void detect_gestos(){
  if( isr_flag == 1 ) {
    detachInterrupt(APDS9960_INT);
    handleGesture();
    isr_flag = 0;
    attachInterrupt(APDS9960_INT, interruptRoutine, FALLING);
    
  }
}
void init_gesture(){
  // Set interrupt pin as input
  pinMode(APDS9960_INT, INPUT);
  Serial.println();
  Serial.println(F("--------------------------------"));
  Serial.println(F("SparkFun APDS-9960 - GestureTest"));
  Serial.println(F("--------------------------------"));
 
  // Initialize APDS-9960 (configure I2C and initial values)
  if ( apds.init() ) {
    Serial.println(F("APDS-9960 inicializacion completada"));
  } else {
    Serial.println("Huvo una falla en al inicializacion de APDS-9960!");
  }
  
  // Start running the APDS-9960 gesture sensor engine
  if ( apds.enableGestureSensor(true) ) {
    Serial.println(F("El sensor de gestos esta ahora funcionando"));
  } else {
    Serial.println(F("huvo un problema en arrancar con el sensor de gestos!"));
  }
  // inicializo el servicio de la rutina de interrupcion
  //attachInterrupt(GPIOPin, ISR, Mode);
  //DONDE ISR =Es el nombre de la función que se llamará cada vez que se active la interrupción
  //Mode: Define cuándo se debe activar la interrupción. Cinco constantes están predefinidas 
  //como valores válidos
  //FALLING: Los disparadores se interrumpen cuando el pin pasa de ALTO a BAJO
  attachInterrupt(APDS9960_INT, interruptRoutine, FALLING);
}
void interruptRoutine() {
  isr_flag = 1;
}
void handleGesture() {
    if ( apds.isGestureAvailable() ) {
    switch ( apds.readGesture() ) {
      case DIR_UP:
        //Serial.println("ARRIBA");
        Serial.println("ABAJO");
        break;
      case DIR_DOWN:
        //Serial.println("ABAJO");
        Serial.println("ARRIBA");
        acerca_de();
        break;
      case DIR_LEFT:
        //Serial.println("IZQUIERDA");
        Serial.println("DERECHA");
        break;
      case DIR_RIGHT:
        //Serial.println("DERECHA");
        Serial.println("IZQUIERDA");
        break;
      case DIR_NEAR:
        Serial.println("CERCA");
        break;
      case DIR_FAR:
        Serial.println("LEJOS");
        break;
      default:
        Serial.println("CONFUSO");
    }
  }
init_pulsioximeter();
}
//++++++++++BLUETOOTH+++++++++++++++++++++++++++++
void init_bluetooth(){
  SerialBT.begin("Pulsera_Smart"); //Bluetooth device name
}
void enviar_datos_bth(){

 ///este es el orden que debe ir para recibirse en la aplicacion
  sprintf(buffer, "%d,%d",pulsos,oxigeno);//concadena varias variables  diferentes como int, char en una sola cadena, aprovecho la coma para dividir en appinventor los datos
  //Serial.println(buffer);
  //SerialBT.write(buffer);
  SerialBT.println(buffer);
}
//++++++++pantallas del oled++++++++++++++++++++++++
void acerca_de()
{
  
  
}
