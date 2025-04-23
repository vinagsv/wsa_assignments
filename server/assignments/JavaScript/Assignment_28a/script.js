function removeChars(str, position, numChars) {
  let firstPart = str.slice(0, position);
  let secondPart = str.slice(position + numChars);
  return firstPart + secondPart;
}

let input = prompt("Enter a string:");
let position = parseInt(prompt("Enter the position to start removal:"), 10);
let numChars = parseInt(
  prompt("Enter the number of characters to remove:"),
  10
);

alert(removeChars(input, position, numChars));
