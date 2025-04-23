function insertStringAtPosition(str1, str2, position) {
  let part1 = str1.slice(0, position);
  let part2 = str1.slice(position);
  return part1 + str2 + part2;
}
//case 1
let str1 = "Hi how are you?";
let str2 = "Good morning";
let position = 3;
console.log(insertStringAtPosition(str1, str2, position));
//case 2
str1 = "Hello";
str2 = "Everyone";
position = 5;
console.log(insertStringAtPosition(str1, str2, position));
