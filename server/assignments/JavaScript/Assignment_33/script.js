function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
}

let inputString = prompt("Enter a string:");
alert(reverseString(inputString));
