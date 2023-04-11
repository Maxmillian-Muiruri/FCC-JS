// Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const yesterday = HIGH_TEMPERATURES.yesterday;
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(HIGH_TEMPERATURES);
