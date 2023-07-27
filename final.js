// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
// Example Input: "hello world" Example Output: "dlrow olleh"

const revString = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};

const revrseOutput = revString("");

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sumOfPosNum = (nums) => {
  let sum = 0;
  const total = nums.map((num) => {
    if (num >= 0) sum += num;
  });
  return sum;
};
sumOfPosNum([-5, 10, -3, 7]);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function mostFrqElm(arr) {
  const frqMap = new Map();
  let mostFrequentElm;
  let maxFrequency = 0;

  for (let element of arr) {
    if (frqMap.has(element)) {
      frqMap.set(element, frqMap.get(element) + 1);
    } else {
      frqMap.set(element, 1);
    }

    if (frqMap.get(element) > maxFrequency) {
      maxFrequency = frqMap.get(element);
      mostFrequentElm = element;
    }
  }

  return mostFrequentElm;
}

const mostFrequent = mostFrqElm([3, 5, 2, 1, 1, 1, 4, 5]);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function findTwoNumbersAddingToTarget(array, target) {
  const sortedArray = array.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

const indices = findTwoNumbersAddingToTarget([2, 3, 6, 8, 11, 15], 9);
console.log(indices);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const calculator = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "please input correct operator";
  }
};

calculator(1, "+", 2);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generatePass = () => {
  let pass = "";
  const str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz" +
    "0123456789" +
    "@#$&)({}:;<>?!%*+=_-";

  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  return pass;
};

generatePass();

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const secondSmallestNumber = (nums) => {
  const sortedNums = nums.sort((a, b) => a - b);
  const uniqueSortedNums = [...new Set(sortedNums)];
  return uniqueSortedNums[1];
};

const smallNum = secondSmallestNumber([34, 42, 6, 6, 6, 7]);
