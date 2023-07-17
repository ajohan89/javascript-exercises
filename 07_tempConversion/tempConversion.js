const convertToCelsius = function(fahrenheit) {
  const solution = (fahrenheit - 32) / 1.8;
  const fSolution =  solution.toFixed(1);
  if (solution % 1 === 0){return parseInt(solution);}
  if (solution % 1 !== 0){return parseFloat(fSolution);}

};

const convertToFahrenheit = function(celsius) {

  const solution = (celsius * 1.8) + 32;
  const cSolution = solution.toFixed(1);
  if (solution % 1 === 0){return parseInt(solution);}
  if (solution % 1 !== 0){return parseFloat(cSolution);}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
