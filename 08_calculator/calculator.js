const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((totalSum, num) => totalSum + Number(num), 0);
};

const multiply = function(numbers) {
  return numbers.reduce((totalProduct, num) => totalProduct * Number(num), 1);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	if (number === 0)
    return 1;
  return number * factorial(number-1);
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
