let n = parseInt(window.prompt("Enter number n"), 10);

function series1(n) {
  return Math.log((2 + 2 * (n - 1)) / (2 - 1));
}

function series2(n) {
  return n * (n + 1);
}

function series3(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    console.log(sum);
    sum += 1 / i;
  }
  return sum;
}

console.log(series1(n));
console.log(series2(n));
// console.log(series3(n));

document.write(`Series 1: ${series1(n)}<br>`);
document.write(`Series 2: ${series2(n)}`);
