function findFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors.join(",");
}

let inputNumber = parseInt(prompt("Enter a positive integer:"));
if (inputNumber > 0) {
  alert("Factors of " + inputNumber + " are: " + findFactors(inputNumber));
} else {
  alert("Please enter a valid positive integer.");
}
