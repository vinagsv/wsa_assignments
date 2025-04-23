function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

let inputString = prompt("Enter a string:");
alert("Number of vowels:" + countVowels(inputString));
