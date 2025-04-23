function genArmstrongNo() {
  let result = [];
  for (let num = 100; num <= 999; num++) {
    let digits = num.toString().split("").map(Number);
    let sum = digits.reduce((acc, d) => acc + Math.pow(d, 3), 0);
    if (sum === num) result.push(num);
  }
  document.getElementById("result").innerText = result.join(", ");
}
