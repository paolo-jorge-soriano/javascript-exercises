const convertToCelsius = function(temperature) {
  let result = (temperature - 32) * 5/9;

  if (result !== parseInt(result)) {
    result = result.toFixed(1);
  }

  return parseFloat(result);
};

const convertToFahrenheit = function(temperature) {
  let result = (temperature * 9/5) + 32;

  if (result !== parseInt(result)) {
    result = result.toFixed(1);
  }

  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
