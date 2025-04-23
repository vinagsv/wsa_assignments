function calcGrade() {
  const m1 = parseFloat(prompt("Enter marks for subject 1:"));
  const m2 = parseFloat(prompt("Enter marks for subject 2:"));
  const m3 = parseFloat(prompt("Enter marks for subject 3:"));

  const avg = (m1 + m2 + m3) / 3;
  let grade = "";

  if (avg >= 90) {
    grade = "Ex";
  } else if (avg >= 80) {
    grade = "A+";
  } else if (avg >= 70) {
    grade = "A";
  } else if (avg >= 60) {
    grade = "B+";
  } else {
    grade = "Fail";
  }

  console.log(`Average:${avg}`);
  console.log(`Grade:${grade}`);
}

calcGrade();
