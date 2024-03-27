//!Task 1
//! Do the below programs in anonymous function & IIFE

//! anonymous function
//!a. Print odd numbers in an array
/*
const odd = function (...a) {
  const oddNumber = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      oddNumber.push(a[i]);
    }
  }
  return oddNumber;
};
console.log(odd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
*/
//! IIFE
//!a. Print odd numbers in an array
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
(function (array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      console.log(array[i]);
    }
  }
})(array);
*/
//! anonymous function
//!b. Convert all the strings to title caps in a string array
/*
const titleCaps = function (str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titleCaps("guvi geeks"));
*/
//! IIFE
//!b. Convert all the strings to title caps in a string array
/*
const str = "guvi geeks";
(function (str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
})(str);
*/
//! anonymous function
//!c. Sum of all numbers in an array
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = function (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
};
console.log(num(arr));
*/

//! IIFE
//!c. Sum of all numbers in an array
/*
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
})(a);
*/
//! anonymous function
//!d. Return all the prime numbers in an array
/*
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
let isPrime = function (num1) {
  if (num1 < 2) return false;

  for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      return false;
    }
  }
  return true;
};
num1.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);
*/

//! IIFE
//!d. Return all the prime numbers in an array
/*
let n = 34;
(function (n) {
  for (let i = 2; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log(i);
    }
  }
})(n);
*/

//! anonymous function
//!e. Return all the palindromes in an array
/*
const array = ["racecar", "madam", "civic", "hello", "world"];
const findPalindromes = function (array) {
  const palindromes = [];
  for (const string of array) {
    if (isPalindrome(string)) {
      palindromes.push(string);
    }
  }
  return palindromes;
};

function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
}
console.log(findPalindromes(array));
*/

//! IIFE
//!e. Return all the palindromes in an array
/*
const array = ["racecar", "madam", "civic", "hello", "world"];
const findPalindromes = function (array) {
  const palindromes = [];
  for (const string of array) {
    if (isPalindrome(string)) {
      palindromes.push(string);
    }
  }
  return palindromes;
};

function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
}
console.log(findPalindromes(array));
*/

//! anonymous function
//!f. Return median of two sorted arrays of the same size
/*
const nums1 = [1, 3, 5, 7, 9];
const nums2 = [2, 4, 6, 8, 10];

function median(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2];

  mergedArray.sort((a, b) => a - b);

  const medianIndex = mergedArray.length / 2;
  if (medianIndex % 1 === 0) {
    return (mergedArray[medianIndex - 1] + mergedArray[medianIndex]) / 2;
  } else {
    return mergedArray[medianIndex];
  }
}

console.log(median(nums1, nums2));
*/
//! IIFE
//!f. Return median of two sorted arrays of the same size
/*
const nums1 = [1, 3, 5, 7, 9];
const nums2 = [2, 4, 6, 8, 10];

(function (nums1, nums2) {
  const mergedArray = [...nums1, ...nums2];

  mergedArray.sort((a, b) => a - b);

  const medianIndex = mergedArray.length / 2;
  if (medianIndex % 1 === 0) {
    return (mergedArray[medianIndex - 1] + mergedArray[medianIndex]) / 2;
  } else {
    return mergedArray[medianIndex];
  }
})(nums1, nums2);
*/

//! anonymous function
//!g. Remove duplicates from an array
/*
let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];

const removeDuplicates = function (arr2) {
  let unique = [];
  for (i = 0; i < arr2.length; i++) {
    if (unique.indexOf(arr2[i]) === -1) {
      unique.push(arr2[i]);
    }
  }
  return unique;
};
console.log(removeDuplicates(arr2));
*/

//! IIFE
//!g. Remove duplicates from an array
/*
let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];

(function (arr2) {
  let unique = [];
  for (i = 0; i < arr2.length; i++) {
    if (unique.indexOf(arr2[i]) === -1) {
      unique.push(arr2[i]);
    }
  }
  return unique;
})(arr2);
*/
//! anonymous function
//!h. Rotate an array by k times
/*
const num2 = [1, 2, 3, 4, 5];
const k = num2.length;

const rotateArray1 = function (arr, shift) {
  for (let i = 0; i < shift; i++) {
    arr.unshift(arr.pop());
    console.log(arr);
  }
};
console.log(rotateArray1(num2, k));
*/

//! IIFE
//!h. Rotate an array by k times
/*
const num2 = [1, 2, 3, 4, 5];
const k = num2.length;

(function (arr, shift) {
  for (let i = 0; i < shift; i++) {
    arr.unshift(arr.pop());
    console.log(arr);
  }
})(num2, k);
*/

//!Task 2
//!Do the below programs in arrow functions.

//! arrow functions
//!a. Print odd numbers in an array

const odd = (...a) => {
  const oddNumber = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 !== 0) {
      oddNumber.push(a[i]);
    }
  }
  return oddNumber;
};
console.log(odd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//! arrow functions
//!b. Convert all the strings to title caps in a string array

const titleCaps = (str) => {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titleCaps("guvi geeks"));

//! arrow functions
//!c. Sum of all numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = (a) => {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
};
console.log(num(arr));

//! arrow functions
//!d. Return all the prime numbers in an array

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
let isPrime = (num1) => {
  if (num1 < 2) return false;

  for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
      return false;
    }
  }
  return true;
};
num1.forEach(function (element) {
  const item = isPrime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

//! arrow functions
//!e. Return all the palindromes in an array

const array = ["racecar", "madam", "civic", "hello", "world"];
const findPalindromes = (array) => {
  const palindromes = [];
  for (const string of array) {
    if (isPalindrome(string)) {
      palindromes.push(string);
    }
  }
  return palindromes;
};

function isPalindrome(string) {
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
}
console.log(findPalindromes(array));
d