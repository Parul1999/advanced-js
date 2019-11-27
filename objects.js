//by object literal
function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
        alert('Hi I\'m' + obj.name + '.');
    }
    return obj;
}
const salva = createNewPerson(salva);
//constructor function
function Person(first, last, age, gender, interests) {

    this.name = {
        first: first,
        last: last
    }
    this.age = age;
    this.gender = gender;
    this.greeting = function() {
        alert('hi i am ' + this.name + ".");
    }
}
let person1 = new Person('Bob', 'Smith', 12, 'male', ['music', 'sking']);
//object() constructor
let person1 = new Object();
person1.name = 'Chris';
person1['age'] = 38;
person1.greeting = function() {
        alert('hi i am ' + this.name + ".")
    }
    //directly passing the object literal in object()
let person1 = new Object(
    name = 'Chris',
    age = 38,
    person1.greeting = function() {
        alert('hi i am ' + this.name + ".")
    });
//create method
let person2 = Object.create(person1);
//person1.name//person1.greeting() in console ..also for person2