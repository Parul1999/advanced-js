class Person { //no classes but class keyword introduced in es6 but under the hood its prototying only
    constructor(first, last, age, gender, interests) {
        this.name = {
            first: first,
            last: last
        }
        this.age = age;
        this.gender = gender;
        this.interests = interests;

    }
};
let person1 = new Person('Bob', 'Smith', 12, 'male', ['music', 'sking', 'kickscrobing']);
class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject) {
        super(this, first, last, age, gender, interests);
        this.subject = subject;
    }
};
let teacher1 = new Teacher('Bob', 'Smith', 12, 'male', ['music', 'sking', 'kickscrobing'], 'mathematics');
//__proto__ teacher1:Person
//js-single threaded but apis support async behaviour