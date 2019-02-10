// So Callbacks are just function that passed a function
// ******************************************************

// 1. Take a function as an Input (argument)
/* const element = document.getElementsByTagName('body');
element.addEventListener('change', () => {
  console.log('Our evidence is updated');
}); */

// 2. Returns a function as the output
const newClue = (name) => {
  const length = name.length;
  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  }
}

// Callback 

// 1
const ifElse = (condition, isTrue, isFalse) => (condition ? isTrue() : isFalse());
ifElse(true,
  () => (console.log(true)),
  () => (console.log(false))
);

// 2
const incrementFn = (n) => (n + 1);
const squareFn = (n) => (n * n);
const doFn = (n, func) => (func(n));

doFn(4, incrementFn); // 5
doFn(2, squareFn); // 4