function averagenumbers(source) {
  let sum = 0;
  for (let i = 0; i < source.length; i++) {
    let currentNumber = source[1];
    sum += currentNumber;
  }

  return sum / source.length;
}

console.log(averagenumbers([1, 4, 7]));
