const fruits = ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Strawberry', 'Blueberry'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sentence = 'A quick brown lazy fox jump over the box';

// console.log(sentence.length);
// console.log(sentence[0]);
// console.log(sentence.split(' ').join(" "));
// console.log(sentence.search('qick'));
// console.log(sentence.charAt(4));
// console.log(sentence.charCodeAt(15));
// console.log(sentence.includes('foxy'));
// console.log(sentence.toUpperCase());
// console.log(sentence.toLowerCase());
// console.log(sentence.concat('. This string include all 26 alphabats.'));
// console.log("adaABacababcde".replace(/a/i, '@'));

const ret1 = fruits.forEach(function (fruit, index, array) {
  console.log(index, fruit);
  return fruit;
})
console.log(ret1);
const square = numbers.map(function (n) {
  return n * n;
})
console.log(square);
const even = numbers.filter(function (n) {
  return n % 2 === 0
})
console.log(even);
const odd = numbers.filter(function (n) {
  return n % 2 !== 0
})
console.log(odd);
const total = numbers.reduce(function (acc, n) {
  console.log(acc, n);
  return acc + n;
})
console.log(total);
console.log(numbers.splice(1, 2, 11))
console.log(numbers)
console.log(numbers.sort(function (a, b) {
  if (a > b) return -1;
  if (a === b) return 0;
  return 14
})); // -1 0 1
// console.log(numbers.reverse())

function anotherFun() {
  let count = 0;
  return ++count;
}

console.log(anotherFun());
console.log(anotherFun());

function fun() {
  let count = 0;
  function innerFun() {
    return ++count;
  }

  return innerFun;
}

const counter = fun();

console.log(counter());
console.log(counter());
console.log(counter());
