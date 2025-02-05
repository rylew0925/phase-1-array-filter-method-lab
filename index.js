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
