import os
from flask import Flask, request

app = Flask(__name__)

@app.route("/ussd", methods = ['POST'])
def ussd():
  # Read the variables sent via POST from our API
  # session_id   = request.values.get("sessionId", None)
  # serviceCode  = request.values.get("serviceCode", None)
  # phone_number = request.values.get("phoneNumber", None)
  text         = request.values.get("text", "default")

  if text      == '':
      # This is the first request. Note how we start the response with CON
      response  = "CON Welcome to Matata Daycare Solutions. \n Select your county \n"
      response += "1. Nyeri \n"
      response += "2. Muranga \n"

  elif text    == '1':
      # Business logic for first level response
      response  = "CON Where are you in Nyeri \n"
      response += "1. Kimathi \n"
      response += "2. Nyeri Town \n"
      response += "3. Kingongo \n" 

  elif text    == '2':
      # Business logic for first level response
      response  = "CON Where are you in Muranga \n"
      response += "1. Muranga Town \n"
      response += "2. Kahuro \n"
      response += "3. Saba Saba \n" 
    

  elif text          == '1*1':  
      response       = "END Boma day 0726527537 \n Nyaribo day 0783647653 \n Kahawa day 0753462873 \n"

  elif text          == '1*2':  
      response       = "END Kimathi Street 0726527537 \n Mathais 0783647653 \n Chieni 0753462873 \n"

  elif text          == '1*3':  
      response       = "END Junction 0726527537 \n Almasi 0783647653 \n Happy 0753462873 \n"

  elif text          == '2*1':  
      response       = "END Townease 0726527537 \n Bahati 0783647653 \n Bubbles 0753462873 \n"

  elif text          == '2*2':  
      response       = "END Baloon 0726527537 \n Jovial 0783647653 \n HappyChild 0753462873 \n"

  elif text          == '2*3':  
      response       = "END Juniors 0726527537 \n Achievers 0783647653 \n Cubs 0753462873 \n"

    
    
  else :
      response = "END Invalid choice"

  # Send the response back to the API
  return response



@app.route('/')
def index():
    return 'Hello from Flask!'


app.run(host='0.0.0.0', port=81)



