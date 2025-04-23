function joinArrayElements() {
  const elements = [];
  const numberOfElements = parseInt(
    prompt("How many elements do you want to enter?"),
    10
  );

  for (let i = 0; i < numberOfElements; i++) {
    const element = prompt(`Enter element ${i + 1}:`);
    elements.push(element);
  }

  const joinedString = elements.join(" ");

  console.log(joinedString);
}

joinArrayElements();
