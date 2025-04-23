function findDates(str) {
  let regex = /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}\b/g;
  let dates = str.match(regex);
  return dates ? dates.join("\n") : "No dates found in the string.";
}

let inputString = prompt("Enter a string:");
alert("Dates in the string are:\n" + findDates(inputString));
