function customTrim(str, trimChar) {
  let regex = new RegExp(trimChar, "g");
  return str.replace(regex, "");
}

let inputString = prompt("Enter a string:");
let trimChar = prompt(
  "Enter the character(s) you want to trim (use space for spaces):"
);
alert("Result after trimming:\n" + customTrim(inputString, trimChar));
