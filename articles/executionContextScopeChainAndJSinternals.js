//- http://bit.ly/2Dug20y

var a = 10;

function functionA() {
  console.log('Start function A');

  function functionB() {
    console.log('In function B');
  }
  functionB();
}

functionA();

console.log('GlobalContext');

// Sample 2 --> JavaScript engines creates the activation object

a = 1;

var b = 2;

cFunc = function(e) {
  var c = 10;
  var d = 15;

  a = 3;

  function dFunc() {
    var f = 5;
  }

  dFunc();
};

cFunc(10);
