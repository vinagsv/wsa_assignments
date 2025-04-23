function countPositiveAndNegativeNumbers() {
  const numbers = [];
  let positiveCount = 0;
  let negativeCount = 0;

  for (let i = 0; i < 10; i++) {
    const number = parseInt(prompt(`Enter number ${i + 1}:`), 10);
    numbers.push(number);
  }

  for (let num of numbers) {
    if (num > 0) {
      positiveCount++;
    } else if (num < 0) {
      negativeCount++;
    }
  }

  console.log(`Positive Numbers: ${positiveCount}`);
  console.log(`Negative Numbers: ${negativeCount}`);
}

countPositiveAndNegativeNumbers();
