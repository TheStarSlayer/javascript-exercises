const repeatString = function(string, noOfRepeats) {
    if (noOfRepeats < 0)
        return 'ERROR';
    let repeatedString = '';
    for (let i = 0; i < noOfRepeats; i++) {
        repeatedString += string;
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
