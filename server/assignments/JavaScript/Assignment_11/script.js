function fizzBuzz(n) {
  let fb = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fb += "FIzzBuzz, ";
    } else if (i % 3 === 0) {
      fb += "FIzz, ";
    } else if (i % 5 === 0) {
      fb += "Buzz, ";
    } else {
      fb += i + ", ";
    }
  }
  console.log(fb);
}

fizzBuzz(100);
