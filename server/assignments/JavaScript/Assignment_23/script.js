document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const input = document.getElementById("arrayInput").value;
    const array = input.split(",").map(Number);

    const sum = array.reduce((acc, num) => acc + num, 0);
    const product = array.reduce((acc, num) => acc * num, 1);

    document.getElementById(
      "result"
    ).innerText = `Sum: ${sum}\nProduct: ${product}`;
  });
