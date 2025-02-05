// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(driver => {
        return driver.toLowerCase().startWith(letter.toLowerCase());
    });
}

/**
const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];
*/
 
function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver.name === name;
    });
}
