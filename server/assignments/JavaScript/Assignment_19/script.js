function fibonacciLoop(n) {
  const fibSeries = [];
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    fibSeries.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  return fibSeries.join(", ");
}

function fibonacciRecursive(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const series = fibonacciRecursive(n - 1);
  series.push(series[series.length - 1] + series[series.length - 2]);

  return series;
}

document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    const inputNumber = parseInt(document.getElementById("inputNumber").value);

    if (!isNaN(inputNumber) && inputNumber > 0) {
      const resultLoop = fibonacciLoop(inputNumber);
      const resultRecursive = fibonacciRecursive(inputNumber);

      document.getElementById(
        "result"
      ).innerHTML = `<strong>Loop Method:</strong> ${resultLoop} <br /> 
             <strong>Recursive Method:</strong> ${resultRecursive.join(", ")}`;
    } else {
      document.getElementById("result").innerHTML =
        "Please enter a valid number greater than 0.";
    }
  });
