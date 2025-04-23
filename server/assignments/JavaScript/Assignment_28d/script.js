function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const userInput = prompt("Enter a string to reverse:");
const reversed = reverseString(userInput);
console.log("Reversed string: " + reversed);
