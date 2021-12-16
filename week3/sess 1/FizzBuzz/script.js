let number = 1;

while (number < 100) {
  // if the number is a muoltiple of 5 and 7 then the below code ....
  if (number % 5 === 0 && number % 7 === 0) {
    //   print the below..
    console.log("fizzbuzz");
    // or if its only a multiple of 5...
  } else if (number % 5 === 0) {
    //   then print below..
    console.log("Fizz");
    // or if its the multiple of 7 then the below code..
  } else if (number % 7 === 0) {
    //   print the below
    console.log("Buzz");
  } else {
    //   or if its just a number, print the number only
    console.log(number);
  }
  number = number + 1;
}
