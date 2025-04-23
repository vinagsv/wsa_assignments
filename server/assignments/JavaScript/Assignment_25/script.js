function calculateSum() {
  let n = parseInt(prompt("Enter the value of n (number of pairs):"));
  let array = prompt("Enter the array of 2n integers (comma separated):")
    .split(",")
    .map(Number);

  if (isNaN(n) || n <= 0 || array.length !== 2 * n) {
    alert("Invalid input. Please ensure n and array length are correct.");
    return;
  }

  array.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += array[2 * i];
  }

  alert(`Sum of min(ai, bi): ${sum}`);
}

calculateSum();
