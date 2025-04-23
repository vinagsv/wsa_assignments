function checkString() {
  const input = document.getElementById("inputString").value;
  const resultElement = document.getElementById("result");

  const regex = /[a-zA-Z0-9-_]/;

  if (regex.test(input)) {
    resultElement.textContent =
      "String contains alpha, numeric, dash, or underscore.";
  } else {
    resultElement.textContent =
      "String doesn’t contain alpha, numeric, dash, or underscore.";
  }
}
