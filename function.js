var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    fullNameWithParameters: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName = "John",
    lastName = "Doe"
}
var person2 = {
    firstName = "Alice",
    lastName = "Johnson"
}

//call() will call the function immediately
var fullNameByCall = person.fullName.call(person1);
console.log(typeof fullNameByCall);
console.log('fullNameByCall', fullNameByCall);
//apply() will call the function immediately
var fullNameByApply = person.fullName.apply(person1);
console.log(typeof fullNameByApply);
console.log('fullNameByApply', fullNameByApply);
//call() takes arguments separetly
//apply() takes arguments as array
var fullNameByCallAndParameter = person.fullName.call(person1, 'Callifornia', 'US');
console.log('fullNameByCallAndParameter', fullNameByCallAndParameter);
var fullNameByApplyAndParameter = person.fullName.apply(person1, ['Callifornia', 'US']);
console.log('fullNameByApplyAndParameter', fullNameByApplyAndParameter);

//bind() returns a new function, so the function can be called later
var fullNameByBind = person.fullName.bind(person1);
console.log('fullNameByBind', typeof fullNameByBind);
console.log('fullNameByBind', fullNameByBind());

var fullNameByBindAndParameter = person.fullNameWithParameters.bind(person1, 'California', 'US');
console.log('fullNameByBindAndParameter', fullNameByBindAndParameter());

var fullNameByBindForPerson2 = person.fullName.bind(person2);
console.log('fullNameByBindForPerson2', fullNameByBindForPerson2());