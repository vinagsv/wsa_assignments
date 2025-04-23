function changeParaText() {
  const paragraph = document.getElementById("myParagraph");
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "24px";
  paragraph.style.fontFamily = "Arial, sans-serif";
  paragraph.style.fontWeight = "bold";
}

function addBorder() {
  const paragraph = document.getElementById("myParagraph");
  paragraph.classList.add("bordered");
}
