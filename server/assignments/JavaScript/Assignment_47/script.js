function alignParagraphs(alignment) {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.textAlign = alignment;
  }
}
