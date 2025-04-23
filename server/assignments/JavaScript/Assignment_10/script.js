function patternA(n) {
  console.log("Pattern (a):");
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i + " ";
    }
    console.log(row);
  }
}

function patternB(n) {
  console.log("\nPattern (b):");
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    console.log(row);
  }
}

function patternC(n) {
  console.log("\nPattern (c):");
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
const n = parseInt(prompt("Enter the number of rows for the patterns: "), 10);

patternA(n);
patternB(n);
patternC(n);
