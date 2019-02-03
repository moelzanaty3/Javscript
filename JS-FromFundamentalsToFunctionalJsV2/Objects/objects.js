const person = {};
person.name = 'mohammedelzanaty';
let who = person.name; // mohammedelzanaty
// person.0 // it will an error
person[0] = 'hello number';
const plea = 'wouldShe';
person[plea] = 'I would never';
console.log(person); // { '0': 'hello number', name: 'mohammedelzanaty', wouldShe: 'I would never' }
person['plea'] = 'I would never';
console.log(person); // { '0': 'hello number', name: 'mohammedelzanaty', wouldShe: 'I would never', plea: 'I would never' }

const arr = [];
arr.name = 'hello';
arr[1] = 'znzn';
console.log(arr); // [ <1 empty item>, 'znzn', name: 'hello' ]
console.log(Array.isArray(arr)); // true
console.log(arr.length); // 2