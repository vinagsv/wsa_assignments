function scrambleWord(inputString, positions) {
  let inputArray = inputString.split("");
  let scrambledArray = [];

  for (let i = 0; i < positions.length; i++) {
    scrambledArray[i] = inputArray[positions[i]];
  }

  return scrambledArray.join("");
}
let string = prompt("Enter a string: ");
let positionsInput = prompt("Enter positions separated by commas: ");
let positions = positionsInput.split(",").map(Number);
let result = scrambleWord(string, positions);
alert("Scrambled word: " + result);
