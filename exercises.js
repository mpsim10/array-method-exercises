function camelize(str) {
  return str
  .split("-")
  .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
  .join("");
};
console.log(camelize("test-string"));

function filterRange(arr, a, b) {
  return arr.filter(value => (value >= a && value <= b));
};
console.log(filterRange([1,2,3,4,5], 2, 4));

