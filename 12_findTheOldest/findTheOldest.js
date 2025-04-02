const findTheOldest = function(persons) {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let oldestAge = 0;
    let personOldest = [];

    for (let person of persons) {
        if (person.yearOfDeath !== undefined) {
            if (person.yearOfDeath - person.yearOfBirth > oldestAge) {
                oldestAge = person.yearOfDeath - person.yearOfBirth;
                personOldest = person;
            }
        }

        else {
            if (currentYear - person.yearOfBirth > oldestAge) {
                oldestAge = currentYear - person.yearOfBirth;
                personOldest = person;
            }
        }
    }

    return personOldest;
};

// Do not edit below this line
module.exports = findTheOldest;
