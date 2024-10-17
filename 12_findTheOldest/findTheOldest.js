const getAge = function(birth, death) {
    if (!death)
        death = (new Date()).getFullYear();
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((maxAgePerson, currentPerson) => {
        maxAge = getAge(maxAgePerson.yearOfBirth, maxAgePerson.yearOfDeath);
        currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

        return maxAge < currentAge ? currentPerson : maxAgePerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
