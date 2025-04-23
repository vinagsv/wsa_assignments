function countItems() {
  const dropdown = document.getElementById("dropdown");
  const itemCount = dropdown.options.length;
  alert(`The dropdown contains ${itemCount} item(s).`);
}

function removeItem() {
  const dropdown = document.getElementById("dropdown");
  const selectedIndex = dropdown.selectedIndex;

  if (selectedIndex === -1) {
    alert("Please select an item to remove.");
  } else {
    dropdown.remove(selectedIndex);
    alert("The selected item has been removed.");
  }
}
