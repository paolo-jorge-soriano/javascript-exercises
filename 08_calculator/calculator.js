const add = function(num1, num2) {
  let result = num1 + num2;

  return result;
};

const subtract = function(num1, num2) {
  let result = num1 - num2;

  return result;
};

const sum = function(nums) {
  let result = 0;

  for (let num of nums) {
    result += num;
  }

  return result;
};

const multiply = function(nums) {
  let result = 1;

  for (let num of nums) {
    result *= num;
  }

  return result;
};

const power = function(num, exponent) {
  let result = num ** exponent;

  return result;
};

const factorial = function(num) {
	// use recursion
  if (num === 0) {
    return 1;
  }
  else {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
