// Function Constructor

/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, year, job) {
    this.name = name;
    this.yearOfBirth = year;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1992, 'designer');
var mark = new Person('Mark', 1987, 'PHP Developer');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/


// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1994;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1975 },
    job: { value: 'designer' }
});
*/

// Primitives vs objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name:'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Fransisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/



/////////////////////////
// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    arr.forEach(e => {
        arrRes.push(fn(e));
    });
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/


//////////////////////////////
// Lecture: Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subjects have you taught, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Dave');
// designerQuestion('Jane');
// designerQuestion('Mark');

// interviewQuestion('teacher')('Seth');


/////////////////////////////////
// Lecture: IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function (goodluck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodluck);
// })(5);



//////////////////////////////////////
// Lectur: Closures

// function retirement(retireAge) {
//     var a = ' years left until retirment.';
//     return function(yearOfBirth) {
//         var age = 2019 - yearOfBirth;
//         console.log((retireAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);

// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementUS(1994);
// retirementGermany(1994);
// retirementIceland(1994);

// //retirement(66)(1994);



// function interviewQuestion(job) {
//     return function(name){
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subjects have you taught, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('Bob');



////////////////////////////////////////
// Lecture: Bind, call, and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function( style, timeofday) {
        if (style === 'formal') {
            console.log('Good ' + timeofday + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeofday + '.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'Afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

