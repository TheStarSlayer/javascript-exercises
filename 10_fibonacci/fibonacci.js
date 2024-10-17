const fibonacci = function(fibonacciIndex) {
    if (typeof fibonacciIndex === 'string')    
        fibonacciIndex = Number(fibonacciIndex);

    if (fibonacciIndex < 0)
        return 'OOPS';

    if (!fibonacciIndex)
        return 0;

    let prevFibonacci = 0, fibonacci = 1;
    let currentFibonacciIndex = 1;

    while (currentFibonacciIndex < fibonacciIndex) {
        let temp = fibonacci;
        fibonacci = fibonacci + prevFibonacci;
        prevFibonacci = temp;
        currentFibonacciIndex++;
    }
    return fibonacci;
};

// Do not edit below this line
module.exports = fibonacci;
