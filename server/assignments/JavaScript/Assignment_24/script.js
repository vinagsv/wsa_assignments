function sortArray() {
  let input = document.getElementById("arrayInput").value;
  let array = input.split(",").map(Number);
  let ascending = [...array].sort((a, b) => a - b);
  let descending = [...array].sort((a, b) => b - a);
  document.getElementById("ascendingOutput").textContent =
    "Ascending order: " + ascending;
  document.getElementById("descendingOutput").textContent =
    "Descending order: " + descending;
}
