#include <Adafruit_Sensor.h>

//library for DHT11 temperature and humidity sensor
#include <DHT.h>
#include <DHT_U.h>

//defining Arduino Pins for sensors
#define LightPin A0
#define SoilHumidityPin A1
#define DHT11Pin 7

//defining the dht object
DHT dht(DHT11Pin, DHT11);

float soilHumiditySensorValue = 0; 
float lightSensorValue = 0; 

void setup() 
{
  // put your setup code here, to run once:
  Serial.begin(9600);
  //setting up dht11
  dht.begin();
  pinMode(DHT11Pin, INPUT);
}

void loop() 
{
  //enable pin 12 and 13 - turns on soil humidity sensor and photoresistor
  //digitalWrite(12, HIGH);
  digitalWrite(13, HIGH);
  
  //make 100 measurements for data stability (light and soil humidity) 1ms in between
  soilHumiditySensorValue = 0; 
  lightSensorValue = 0; 
  for (int i = 0; i < 100; i++) 
  { 
    soilHumiditySensorValue += analogRead(SoilHumidityPin);
    //lightSensorValue += analogRead(LightPin);
    delay(1); 
  } 
  //disable pin 12 and 13 - turns off soil humidity sensor and photoresistor
  //digitalWrite(12, LOW);
  digitalWrite(13, LOW);
  //get the actual value as the average of 100 measurements (analog value)
  soilHumiditySensorValue /= 100.0; 
  //lightSensorValue /= 100;

  //measure light intensity in analog
  lightSensorValue = analogRead(LightPin);
  
  //DISPLAY
  //soil humidity
  Serial.print(" Soil Humidity: ");
  Serial.print(soilHumiditySensorValue);

  //dht11 values
  Serial.print(" Temperature = ");
  Serial.print(dht.readTemperature());
  Serial.print("°C Humidity = ");
  Serial.print(dht.readHumidity());

  //photoresistor in analog
  Serial.print("%  LightIntensity = ");
  Serial.println(lightSensorValue);
  
  delay(500);
  
}
