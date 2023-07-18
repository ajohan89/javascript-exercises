const palindromes = function (str) {

    var regularExpression =  /[\W_]/g;
    //  \W removes all non-alphanumeric characters
    // \W matches any non-word character
    // \W is equivalent to [^A-Za-z0–9_]
    // \W matches anything that is not enclosed in the brackets

    var lowerCaseString = str.toLowerCase().replace(regularExpression, '');
    // str.toLowerCase() = "Ama".toLowerCase() = "ama ,9"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "ama"
  // var lowerCaseString = "ama,9";
    var reverseStr = lowerCaseString.split('').reverse().join('');
    //chained different methods together using the split, reverse, and join method.
    //split seperates the string elements ['a','m','a','9']
    // reverse reverses the the array
    //and join joines them all together with no commas
    return reverseStr === lowerCaseString;
    //this return statement matches to test if they are a match
};

// Do not edit below this line
module.exports = palindromes;
