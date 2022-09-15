// Rest operator ...
// Spread operator ...
// Rest and Spread operator were introduced in ES6/ES2015 for Array
// Rest and Spread operator were introduced in ES8/ES2017 for Object

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num2 = [].concat(numbers, 11, 12, 13, 14);
// [...numbers, ...numbers, 11, 12, 13, 14]
// [].concat(numbers).sort();
// [...numbers].sort();
// numbers[0], numbers[1], numbers[2], numbers.slice(3)
const [f, s, t, ...restN] = numbers;
// console.log(f, s, t, restN);
const person = {
  name: 'John Morris', age: 26, hobbies: ['Reading', 'Writing'], address: {
    street: 'MG Road', city: 'Mumbai', pincode: 400078
  }
}
const john = { ...person };
// person.name, person.age, person.address
const { name, age: age1, address: address1, ...restProp } = person;
// console.log(name, age1, address1, restProp);

function getDefaultName() {
  console.log('Requesting default name');
  return 'Guest';
}

function greet(age, name = getDefaultName()) {
  return `Hello, ${name}`;
}

function sum(x, ...num) {
  return num.reduce(function (a, b) { return a + b })
}

function intro({ name: name, age: age, ...rest }) {
  console.log(name, age, rest)
}

// console.log(greet('John Morris', 20))
// console.log(greet(age = 20, name = 'Joh Maxwell'))
// console.log(greet())
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
intro(person)
intro({ height: 172, weight: 66, age: 24, name: 'John Doe' })

// function declration
// function expression
// IIFE - Immediately Invoked Function Expression
const greetNew = function (name = 'Guest') {
  return `Hello, ${name}`;
}
greetNew();

const hola = (function () {
  return `Hola, Guest`;
})()

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log('Person function');
}

Person.prototype.introduce = function () {
  return `Hi, this is ${this.name}. I am ${this.age} years old.`
}

const p1 = new Person('John Morris', 28);
console.log(p1)
console.log(p1.introduce())


const fun1 = () => { }
const fun2 = a => { }
const fun3 = (a, b) => a + b
const fun4 = a => a

[].map(fun4)
