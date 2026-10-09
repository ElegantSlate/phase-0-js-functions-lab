let amount = 100;
let str = "hello";
let num1 = 10;
let num2 = 20;
let originalPrice = 100;
let discountPercentage = 20;

function calculateTax(amount) {
  return amount * 0.1;
}
function convertToUpperCase(str) {
  return str.toUpperCase();
}
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

console.log(module.exports);