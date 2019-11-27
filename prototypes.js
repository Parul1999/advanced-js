//prototype
function Person(first, last, age, gender, interests) {

    this.name = {
        first: first,
        last: last
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        alert(this.name.first + '' + this.name.last + 'is' + this.age + 'years old')
    };
    this.greeting = function() {
        alert('hi i am ' + this.name.first + ".");
    };
}
let person1 = new Person('Bob', 'Smith', 12, 'male', ['music', 'sking']); //__proto__:object
let person2 = Object.create(person1); //__proto__:
//Person.prototype
//Object.prototype
//__proto__:tells protype 
//person2.__proto__//person1 too
//constructor property person1.constructor
let person3 = new person1.constructor('Karen', 'Steph', 12, 'female', ['reading,riding']); //__proto__:object
//person3.name.first 
//person3.age 
//person3.bio() 
//person1.constructor.name 
Person.prototype.fullName = function() {
    alert(this.name.first + "" + this.name.last);
}