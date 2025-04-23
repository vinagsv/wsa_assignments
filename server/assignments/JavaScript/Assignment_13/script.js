function countChars(str) {
  return [...str].reduce(
    (map, char) => map.set(char, (map.get(char) || 0) + 1),
    new Map()
  );
}

function robot(path) {
  if (!path) {
    console.log("Path is empty");
    return true;
  }
  const charMap = countChars(path);
  return (
    (charMap.get("R") || 0) === (charMap.get("L") || 0) &&
    (charMap.get("U") || 0) === (charMap.get("D") || 0)
  );
}

let path = window.prompt("Enter the path");
console.log(robot(path));
