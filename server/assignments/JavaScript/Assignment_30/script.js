function checkPalindrome() {
  const input = prompt("Enter a word or number:");

  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedInput = cleanedInput.split("").reverse().join("");

  if (cleanedInput === reversedInput) {
    alert("palindrome");
  } else {
    alert("Not palindrome");
  }
}

checkPalindrome();
