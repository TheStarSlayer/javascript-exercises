const sumAll = function(number1, number2) {
    if (typeof number1 !== 'number' ||
        typeof number2 !== 'number' ||
        Math.round(number1) !== number1 ||
        Math.round(number2) !== number2 ||
        number1 < 0 ||
        number2 < 0
    ) {
        return 'ERROR';
    }

    let sum = 0;
    let lowerLimit = number1, upperLimit = number2;
    if (number1 > number2) {
        lowerLimit = number2;
        upperLimit = number1;
    }

    for (; lowerLimit <= upperLimit; lowerLimit++)
        sum += lowerLimit;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
