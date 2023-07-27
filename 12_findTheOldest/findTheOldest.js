const findTheOldest = function(name, yearOfBirth, yearOfDeath) {
    let people = name, yearOfBirth, yearOfDeath;
    let oldestPerson = yearOfDeath - yearOfBirth;
    
    
    //assume the first person is the oldest
    for (let i = 0; i < people.length; i++) {
        const currentAge = people.yearOfDeath[i] - people.yearOfBirth[i];
        const oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    
        if (currentAge > oldestAge) {
          oldestPerson = currentPerson;
        }
      }
    
      return oldestPerson;
    }

// Do not edit below this line
module.exports = findTheOldest;
