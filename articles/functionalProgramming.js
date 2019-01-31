// http://bit.ly/2QzskrN

const meetups = [
  {
    name: 'JS',
    isActive: true,
    members: 700
  },
  {
    name: 'Angular',
    isActive: true,
    members: 900
  },
  {
    name: 'Node',
    isActive: false,
    members: 600
  },
  {
    name: 'React',
    isActive: true,
    members: 500
  }
];

const sumFBChain = meetups
  .filter(m => {
    return m.isActive;
  })
  .map(m => {
    return m.members - 0.1 * m.members;
  })
  .reduce((acc, m) => {
    return acc + m;
  });

// console.log(sumFBChain);

// - http://bit.ly/2Dyg87t
const redObj = { color: 'red' };
const redObjClone = Object.assign({}, redObj);
const yellowObj = Object.assign({}, redObj, { color: 'yellow' });
console.log('redObj ', redObj);
console.log('redObjClone ', redObjClone);
console.log('yellowObj ', yellowObj);

const a = [1, 2, 3];
console.log('a [] = ', a);
a.push(2); // not FB ready bcz it change the orignal array
console.log('a after push', a);
const b = a.concat(4);
console.log('b after concat', b);
// spread operator
const c = [...b, 5, 6];
console.log('c after spread operator', c);

// instead of using pop() and splice(),
// which modify the original array, use array.filter()
a.pop();
console.log('a after pop', a);
a.splice(1, 1);
console.log('a after splice', a);
const d = a.filter((v, k) => k < 1);
console.log('a after filter < 1', d);

const f = n => (n <= 1 ? 1 : f(n - 1) + f(n - 2));
console.log('Fibonacci sequence (N = (N-1 + N-2)) calculation is', f(5));
