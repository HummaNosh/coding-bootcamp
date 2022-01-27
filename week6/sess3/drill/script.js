console.log("hello");

// Write a function that takes in an input and returns true if it’s an integer and false otherwise.

// Ex:
// Input: "7"
// Output: false

// Input: 7
// Output: true

// Input: 4.3
// Output: false

function write(x) {
  document.write(x);
}

function isEven(number) {
  if (number % 2 == 0) {
    return "true";
  } else {
    return "false";
  }
}

console.log(write("7"));
