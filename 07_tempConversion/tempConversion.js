const convertToCelsius = function(temp) {
  convertedTemp = (temp - 32) * 5/9; 
  return +convertedTemp.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  convertedTemp = temp * 1.8 + 32; 
  return +convertedTemp.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
