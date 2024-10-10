const reverseString = function(string) {
    if (typeof string !== 'string' || string.length <= 0)
        return '';

    let reversedString = '';
    for (let i = 0; i < string.length; i++) {
        reversedString += string.at(-1 - i);
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
