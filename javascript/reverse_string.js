function reverseString(str) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// the problem in my own words:
// write a method that takes a string and return the string in reverse
// the string "hi" should return "ih"
// how do I select each element in the string?
// by iterating over the string 

// Please add your pseudocode to this file
// iterate over each element in a string:

// And a written explanation of your solution
