function logConsole(value) {
  console.log(value);
}

function logTable(value) {
  console.log(value);
}

const person = {};
person.name = "mohammedelzanaty";
let who = person.name; // mohammedelzanaty
// person.0 // it will an error
person[0] = "hello number";
const plea = "wouldShe";
person[plea] = "I would never";
logTable(person); // { '0': 'hello number', name: 'mohammedelzanaty', wouldShe: 'I would never' }
person["plea"] = "I would never";
logTable(person); // { '0': 'hello number', name: 'mohammedelzanaty', wouldShe: 'I would never', plea: 'I would never' }

const arr = [];
arr.name = "hello";
arr[1] = "znzn";
logConsole(arr); // [ <1 empty item>, 'znzn', name: 'hello' ]
logConsole(Array.isArray(arr)); // true
logConsole(arr.length); // 2
