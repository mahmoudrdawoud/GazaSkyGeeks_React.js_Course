function removeDuplicates(strings) {
  const uniqueStrings = [...new Set(strings)];
  return uniqueStrings;
}

const strings = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueArray = removeDuplicates(strings);

console.log(uniqueArray);
