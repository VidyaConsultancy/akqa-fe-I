// callback
// passing a function as an arg to another function
// why?
// promise
// fetch api

function fun(cb) {
  let c;
  const a = 10;
  const b = 20;
  setTimeout(() => {
    c = a + b;
    cb(c);
  }, 1000);

  return c;
}

function anotherFun(total) {
  console.log(total);
  console.timeEnd('async');
  // I need access to total value calculated by function `fun`
}

console.time('async');
const ret = fun(anotherFun);
console.log(ret);
