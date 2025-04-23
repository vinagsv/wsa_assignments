function calculateArea() {
  const sideA = parseFloat(document.getElementById("sideA").value);
  const sideB = parseFloat(document.getElementById("sideB").value);
  const sideC = parseFloat(document.getElementById("sideC").value);

  if (
    isNaN(sideA) ||
    isNaN(sideB) ||
    isNaN(sideC) ||
    sideA <= 0 ||
    sideB <= 0 ||
    sideC <= 0
  ) {
    document.getElementById("result").innerHTML =
      "please enter valid positive numbers for all sides.";
    return;
  }

  const s = (sideA + sideB + sideC) / 2;
  const area = Math.sqrt(s * (s - sideA) * (s - sideB) * (s - sideC));

  if (isNaN(area) || area <= 0) {
    document.getElementById("result").innerHTML =
      "The sides do not form a valid triangle,";
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `The area of the triangle is ${area.toFixed(
      2
    )} square units.`;
  }
}
