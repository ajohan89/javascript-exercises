const add = function(x,y) {
  const solution = (x + y);
  return parseInt(solution);
};

const subtract = function(x,y) {
  const subSolution = (x - y);
  return parseInt(subSolution);
};

const sum = function(x) {
    let arr = [...x];
    let sum = arr.reduce(function(a, b) {
      return a + b;
    }, 0);
    return parseInt(sum);
};

const multiply = function(...x) {
    const array = [...x];
    var sum = 1;
    for(var i=0; i<array.length; i++){
        sum *= array[i];
    }return sum;
        
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
