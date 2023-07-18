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

const power = function(x, y) {
    return Math.pow(x,y);
};

const factorial = function(num) {
  if(num === 0 || num === 1){
    return 1;
  }
  for(var i = num - 1; i>=1; i--){
        num *= i;
    } return num;
    /* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
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
