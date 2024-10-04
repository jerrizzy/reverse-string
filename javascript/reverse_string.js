function reverseString(str) {
  // type your code here
  let result = ""

  // iterate over the string from the end to the beginning using a for loop:
  for (let i = str.length - 1; i >= 0; i-- ){
    result += str[i]
}
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ''");
  console.log("=>", reverseString(""));

  console.log("");

  console.log("Expecting: 'a'");
  console.log("=>", reverseString("a"));

  console.log("");

  console.log("Expecting: 'ba'");
  console.log("=>", reverseString("ab"));

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
// how do I reverse the string?
// can I start iterating from the end instead of the first element?
// I need to know the index of each element in the string
// and start iterating from the end of the string until I reach the beginning, index 0

// Please add your pseudocode to this file
// create empty string:
// get the length of the string reduce by 1 to use for the index:
// loop down or iterate backward
// as long the index is not 0, keep looping down or iterating backward:
// and after each looping add the element to the empty string
// return the empty string

// And a written explanation of your solution
// initialize an emppty string to store the iterated strings then
// iterate over each element in a string starting from the end of the string:
// if I know the length of the string I can find the index for the last element
// the length of the string minus 1, because the index of the string starts at 0
// for example if there's 3 element in a string, the first element's index is 0
// and the last element is 2. But the total of elements in the string is 3.
// So start iterating at the last index of the string
// as long as the index is greater or equal to the first index, 0, 
// keep iterating.
// after each iteration or looping over an element, add the element to the empty sting
