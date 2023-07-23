const getTheTitles = function(books) {
       
        return books.map(book => book.title);
};
//The map method is called on the books array. 
//The map method is used to create a new array by applying a callback 
//function to each element of the original array and returning the results.


// Do not edit below this line
module.exports = getTheTitles;
