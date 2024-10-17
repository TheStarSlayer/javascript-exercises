const palindromes = function (text) {
    const alphanumerics = "abcdefghijklmnopqrstuvwxyz0123456789";
    const processedTextArray = text
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerics.includes(character));

    let processedTextReverse = processedTextArray.toReversed().join('');
    processedText = processedTextArray.join('');

    return processedText === processedTextReverse;
};

// Do not edit below this line
module.exports = palindromes;
