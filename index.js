// Calculates and returns 10% tax
const calculateTax = (amount) => {
  return amount * 0.10;
};

// Converts a string to uppercase
const convertToUpperCase = (text) => {
  return text.toUpperCase();
};  

// Returns the larger of two numbers
const findMaximum = (num1, num2) => {
  return Math.max(num1, num2);
}

// Checks whether a word is a palindrome
const isPalindrome = (word) => {
  return word === word.split("").reverse().join("");
}

// Calculates the final price after a discount
const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
  return originalPrice - (originalPrice * discountPercentage / 100);
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };