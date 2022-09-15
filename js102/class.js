class Person {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  hello() {
    return `Hi, ${this.name}`;
  }

  introduce() {
    return `I'm ${this.age} year old.`
  }
}

class Employee extends Person {
  constructor(name, age, height, weight, dept) {
    super(name, age, height, weight);
    this.dept = dept;
    this.hobbies = ['Reading', 'Writing', 'Travelling', 'Gaming']
  }

  introduce({ }) {
    return `${super.introduce()} I work in ${this.dept} department.`
  }

  printHobby() {
    // const _this = this;
    // const that = this;
    return this.hobbies.map((hobby) => {
      return `I work in ${this.dept}, and my hobby is ${hobby}`
    })
  }
}

const p1 = new Person('John Morris', 28, 180, 68);
const p2 = new Person('Jake Welch', 58, 180, 60);
console.log(p1);
console.log(p2);
const e1 = new Employee('John Smith', 45, 171, 70, 'Marketing');
console.log(e1);
console.log(e1.printHobby())
// bind, apply, call
