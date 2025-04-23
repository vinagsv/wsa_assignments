function generateUniquePin(length) {
  let pin = "";
  for (let i = 0; i < length; i++) {
    pin += Math.floor(Math.random() * 10).toString();
  }
  return pin;
}

const length = 6; // chnage value for different lengths
const uniquePin = generateUniquePin(length);
console.log(uniquePin);
