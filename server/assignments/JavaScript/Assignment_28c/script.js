function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const input = prompt("Enter a string:");
console.log("Capitalized String:", capitalizeWords(input));
