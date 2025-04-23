function createParagraph() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is a Paragraph.";
  const container = document.getElementById("container");
  container.appendChild(paragraph);
}

function createNav() {
  const navElement = document.createElement("nav");
  const link = document.createElement("a");
  link.href = "https://www.google.com";
  link.target = "_blank";
  link.textContent = "Google";

  navElement.appendChild(link);
  const container = document.getElementById("container");
  container.appendChild(navElement);
}

function createStrong() {
  const strongElement = document.createElement("strong");
  strongElement.textContent = "Paragraph with Strong";
  const container = document.getElementById("container");
  container.appendChild(strongElement);
}
