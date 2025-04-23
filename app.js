// STRING MANIPULATION FUNCTION

// this function below is to reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");
}
const original = "Hello, world!";
const reversed = reverseString(original);
console.log(reversed);

// this is aa function that the number of count characters in  a string
function countCharacters(str) {
  return str.length;
}
const message = "Hello World";
const countMessage = countCharacters(message);
console.log(countMessage);

// this is a function to capitalize words

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
const sentence = "hello world, this is javascript.";
const capitalized = capitalizeWords(sentence);
console.log(capitalized);

// ARRAY FUNCTIONS

// this function is to find maximum and minumum number in an array

const numbers = [5, 12, 8, 3, 29, -4];
function Maximum(arr) {
  return Math.max(...arr);
}
const findMax = Maximum(numbers);
console.log(findMax);

function Minimum(arr) {
  return Math.min(...arr);
}
const findMin = Minimum(numbers);
console.log(findMin);

// this function is to sum all the numbers in an array

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

// this is a function that filters out elements from an array based on a given condition.

const users = [
  { name: "Josh", age: 24 },
  { name: "Ada", age: 30 },
  { name: "Mike", age: 19 },
  { name: "Tina", age: 27 },
];

const adults = users.filter((user) => user.age >= 25);
console.log(adults);

// MATHEMATICAL FUNCTIONS

// this is a function that calculates the factorial of a given number.

function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));

// this is a function to check if a number is a prime number or not
function isPrime(n) {
  if (n <= 1) return false; // 0 and 1 are not prime
  if (n === 2) return true; // 2 is the only even prime number
  if (n % 2 === 0) return false; // exclude other even numbers

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

const n = 17;
console.log(`${n} is prime:`, isPrime(n));

// this is a function to generate the Fibonacci sequence up to a given number of terms

function generateFibonacci(n) {
  const fib = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) fib.push(0);
    else if (i === 1) fib.push(1);
    else fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(generateFibonacci(10));
