const person = {
    firstName: "Mithun",
    lastName: "S",
    age : 20,
};

function ageInDays (personObject, callback){
    const fullName = `${personObject.firstName} ${personObject.lastName}`
    const ageInDays = personObject.ageInDays * 365;
    callback (fullName , ageInDays);
}

function logResult (fullName, ageInDays) {
    console.log(`The person Full Name is: ${fullName}, and age in days is ${ageInDays}`);
}

ageInDays(person, logResult);