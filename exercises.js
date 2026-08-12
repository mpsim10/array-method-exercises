// translate border-left-width to borderLeftWidth

function camelize(str) {
  return str
  .split("-")
  .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
  .join("");
};
console.log(camelize("border-left-width"));

// filter range

function filterRange(arr, a, b) {
  return arr.filter(value => (value >= a && value <= b));
};
console.log(filterRange([1,2,3,4,5], 2, 4));

// filter range in place

function filterRangeInPlace(arr,a,b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > a && arr[i] < b) {
      arr.splice(i, 1);
      i--;
    };
  };
};
const arrToFilter = [5, 3, 8, 1]
filterRangeInPlace(arrToFilter,1,4);
console.log(arrToFilter);

// sort in decreasing order

function decreasingOrder(arr) {
  return arr
  .sort(function(a,b) {
    if (a < b) return -1;
    if (a === b) return 0;
    if (a > b) return 1;
  })
  .reverse();
};
console.log(decreasingOrder([1,2,3,4,5]));

// copy and sort array

const arr = ["HTML", "JavaScript", "CSS"]
const sorted = arr.map(item => item).sort();
console.log(arr);
console.log(sorted);

