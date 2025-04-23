function findLongestWord() {
  const inputString = prompt("Enter a string:");
  const words = inputString.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  alert("The longest word is: " + longestWord);
}

findLongestWord();
