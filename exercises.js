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

const arrToSort = ["HTML", "JavaScript", "CSS"]
const sorted = arrToSort.map(item => item).sort();
console.log(arrToSort);
console.log(sorted);

// shuffle an array

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  };
};

const arrToShuffle = [1,2,3];
shuffleArr(arrToShuffle);
console.log(arrToShuffle);

// filter unique array members

function unique(arr) {
  const unique = []
  for (const val of arr) {
    if (!unique.includes(val)) {
      unique.push(val);
    };
  };
  return unique;
};

const arrToMakeUnique = ["hare", "krishna", "hare", "krishna", "krishna", "krishna", "hare", "hare", ":-O"]
console.log(unique(arrToMakeUnique));