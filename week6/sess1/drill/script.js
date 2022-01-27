console.log("hello");

function highest(arr) {
  firstnumber = Math.max(...arr);
  index = arr.indexOf(firstnumber);
  arr.splice(index, 1);
  secondnumber = Math.max(...arr);
  return secondnumber;
}

console.log(highest([1, 4, 7]));
// expect 4
console.log(highest([10, 5]));
// expect 5
console.log(highest([1, 5, 2, 3, 4]));
// expect 4

function getSecondHighestNumber(array) {
  let highestCurrentNumber = 0;
  let secondHighestCurrentNumber = 0;
  /* Loop through doing magic */
  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    if (currentNumber > highestCurrentNumber) {
      secondHighestCurrentNumber = highestCurrentNumber;
      highestCurrentNumber = currentNumber;
      continue;
    }
    if (currentNumber > secondHighestCurrentNumber) {
      secondHighestCurrentNumber = currentNumber;
    }
  }
  return secondHighestCurrentNumber;
}
console.log(getSecondHighestNumber([1, 4, 7]));
// expect 4
console.log(getSecondHighestNumber([10, 5]));
// expect 5
console.log(getSecondHighestNumber([1, 5, 2, 3, 4]));
// expect 4
