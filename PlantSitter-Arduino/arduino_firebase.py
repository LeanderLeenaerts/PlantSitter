#essential imports for fetching serial data and managing firebase database
from serial import Serial
from firebase import firebase

#connecting to the realtime firebase databse
fb = firebase.FirebaseApplication('https://arduino-test-7023d-default-rtdb.firebaseio.com/')

#collect incoming serial data from port ttyACM0 where the Arduino board is connected
arduino = Serial('/dev/ttyACM0', 9600, timeout=.1)

#initialize fields data that will be updated after each serial data receival
dbEntry = { 
            'Soil_humidity': "",
            'Temperature': "",
            'Air_humidity': "",
            'Light_intensity': ""
        }

#post the data to firebase
fb.put('/greenhouse/sensors/-MXnsqgC8fvFhbnQj8VD', 'Values', dbEntry)

while True:

    data = arduino.readline()[:-2].decode("utf-8")
    
    if data != "":

        #splitting the received line of values to get the soil humidity, temperature, air humidity and light intensity
        fields = data.split("#")
        print(fields)

        if len(fields) == 4:
            
            #create the database entry
            dbEntry = {
                'Soil_humidity': fields[0],
                'Temperature': fields[1],
                'Air_humidity': fields[2],
                'Light_intensity': fields[3]
            }

            #update the sensor values
            fb.put('/greenhouse/sensors/-MXnsqgC8fvFhbnQj8VD', 'Values', dbEntry)
            