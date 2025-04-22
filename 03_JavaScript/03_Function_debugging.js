var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

// this below one is interesting

let str = 100;

let res = tellNum();
console.log(res);

function tellNum(n) {
  console.log(`Num is ${n}`);
}

tellNum(str);
