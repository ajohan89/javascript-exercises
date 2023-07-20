function fibonacci(x) {
    if(x < 0) {
        return 'OOPS';
    }
    if(x < 2) {
        return parseInt(x);
    }
    else {
        for(let i = 0; i < x; i++) {
            solution = fibonacci(x-1) + fibonacci(x - 2);
            return solution;
        }
    }
}

// take nth term input from the user



// Do not edit below this line
module.exports = fibonacci;
