let squareNumber = 1;
let numberOfRiceGrains = 1;
let totalNumberOfRiceGrains = 1;

while (squareNumber < 64) {
  squareNumber = squareNumber + 1;
  numberOfRiceGrains = 2 * numberOfRiceGrains;
  totalNumberOfRiceGrains = totalNumberOfRiceGrains + numberOfRiceGrains;
  console.log("Square number: " + squareNumber);
  console.log("Number of rice grains: " + numberOfRiceGrains);
}

console.log("Total number of rice grains: " + totalNumberOfRiceGrains);
