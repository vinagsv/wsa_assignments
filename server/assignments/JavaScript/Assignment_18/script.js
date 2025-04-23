function checkOddEven() {
  let userInput = parseInt(document.getElementById("numberInput").value);
  let result;
  if (userInput % 2 === 0) {
    result = "Even number";
  } else {
    result = "Odd number";
  }
  document.getElementById("result").innerText = result;
}
