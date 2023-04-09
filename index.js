function isPalindrome(word) {
  // Write your algorithm here
  
}
function isPalindrome(str) {
  // get the length of the input string
  let len = str.length;
  
  // loop through the string
  for (let i = 0; i < Math.floor(len/2); i++) {
    // check if the characters at both ends match
    if (str[i] !== str[len-1-i]) {
      // if they don't match, return false
      return false;
    }
  }
  
  // if the loop completes without returning false, the string is a palindrome
  return true;
}

/*
  Add written explanation of your solution here
  
isPalindrome takes a string and returns true if it's a palindrome (reads 
  the same backward as forward) and false if it's not.
 It compares the characters at each end of the string until a mismatch 
 is found or the entire string has been checked.
  If a mismatch is found, it returns false; otherwise, it returns true.

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
