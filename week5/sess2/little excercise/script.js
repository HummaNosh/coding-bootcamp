function isPalindrome(word) {
  // Loop through 0 up to the word length
  // Get the ith character, and the ith last character
  // If they're not equal, the word is not a palindrome
  // If the loop completes, then the word is a palindrome
  for (let i = 0; i < word.length; i++) {
    const character = word.charAt(i);
    const characterFromEnd = word.charAt(word.length - i - 1);
    if (character !== characterFromEnd) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("noon"));

console.log(isPalindrome("horse"));
console.log(isPalindrome("racecar"));

// another fancy way

// function isPalindrome(word) {
//     return word.split('').reverse().join('') === word
// }
