function swapNumbers() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;
  document.getElementById("result").innerText = `num1: ${num1}, num2: ${num2}`;
}
