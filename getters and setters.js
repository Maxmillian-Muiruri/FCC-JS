// Use getters and setters to Control Access to an Object
class Thermostat {
  constructor(temp) {
    this._temperature = temp;
  }
  get temperature() {
    return (5 / 9) * (this._temperature - 32);
  }
  set temperature(newTemp) {
    this._temperature = (newTemp * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(thermos(Thermostat));
