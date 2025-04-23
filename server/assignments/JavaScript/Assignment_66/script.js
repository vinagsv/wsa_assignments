const poll = {
  question: "What is your favourite programming language?",
  options: ["JavaScript", "Python", "Rust", "C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const input = prompt(
      `${this.question}\n${this.options
        .map((opt, i) => `${i}: ${opt}`)
        .join("\n")}\n(Write option number)`
    );

    const answer = Number(input);

    if (
      typeof answer === "number" &&
      answer >= 0 &&
      answer < this.options.length
    ) {
      this.answers[answer]++;
    } else {
      alert("Invalid input. Please enter a valid option number.");
    }

    this.displayResults("string");
    this.displayResults("array");
  },

  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

const pollButton = document.getElementById("pollButton");

pollButton.addEventListener("click", () => poll.registerNewAnswer());
