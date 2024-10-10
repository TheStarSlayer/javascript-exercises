const convertToCelsius = function(fahrenheit) {
  let tempInCelsius = (fahrenheit - 32) * (5/9);
  return validTemp(tempInCelsius);
};

const convertToFahrenheit = function(celsius) {
  let tempInFahrenheit = (celsius * (9/5)) + 32;
  return validTemp(tempInFahrenheit);
};

const validTemp = function(magnitude) {
  if (Math.round(magnitude) === magnitude)
    return magnitude
  return parseFloat(magnitude.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
