function Person(first, last, age, gender, interests) {

    this.name = {
        first: first,
        last: last
    }
    this.age = age;
    this.gender = gender;
    this.interests = interests;

}
Person.prototype.bio = function() {
    alert(this.name.first + '' + this.name.last + 'is' + this.age + 'years old');
};
Person.prototype.greeting = function() {
    alert('hi i am ' + this.name.first + ".");
};
Person.prototype.farewell = function() {
    alert('farewell ' + this.name.first + ' ' + this.name.first);
};
let person1 = new Person('Bob', 'Smith', 12, 'male', ['music', 'sking']);
//Person.prototype
//Person.__proto__
//Person.constructor
//person1.__proto__===Person.prototype (true)
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}
//inheritance in these two lines
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function() {
    let prefix;
    if (this.gender === 'male' || this.gender == 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = "Mr";
    } else if (this.gender == 'female' || this.gender == 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = "Mrs";
    } else {
        prefix = "Mx";
    }
    alert('My name is' + prefix + '' + this.name.last + ', and I teach ' + this.subject + '.');
};
let teacher1 = new Teacher('Karen', 'Steph', 12, 'female', ['reading,riding'], 'mathematics');

//instance.constructor=const_name
//instance.__proto==const_name.prototype