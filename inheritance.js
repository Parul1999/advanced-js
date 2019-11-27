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
    alert(this.name.first + '' + this.name.last + 'is' + this.age + 'years old')
};
Person.prototype.greeting = function() {};
Person.prototype.farewell = function() {};
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
    if (this.male === '') {

    } else if () {

    } else if () {

    }

};
let teacher1 = new Teacher('Karen', 'Steph', 12, 'female', ['reading,riding']);

//instance.constructor=const_name
//instance.__proto==const_name.prototype