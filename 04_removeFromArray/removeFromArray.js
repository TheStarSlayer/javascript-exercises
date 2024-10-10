const removeFromArray = function() {
    const array = arguments[0];
    let filteredArray = array;
    
    for (let i = 1; i < arguments.length; i++)
        filteredArray = filteredArray.filter((elem) => elem !== arguments[i]);

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
