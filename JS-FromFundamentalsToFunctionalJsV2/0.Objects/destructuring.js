/**
 * ES6 Destructuring 
 */

// Destructuring Array
const [first, second] = [true, false];
console.log(`first=${first} , second=${second}`); // first=true, second=false

// Destructuring Object 
let person = {
    fname: 'Mohammed',
    lname: 'Elznaaty',
    age: 25,
    job: 'Senior Frontend Developer'
};
const {
    fname,
    lname
} = person;
console.log(fname) // Mohammed

// Omit Values
let [, , b] = [1, 2, 3];
console.log(b) //=> 3

// Combine with spread/rest operator (accumaltes the rest of the values)
let [m, ...n] = [1, 2, 3, 4, 5, 6];
console.log(m, n); //=> 1 [ 2, 3, 4, 5, 6]

// Swap variables easily without temp
var x = 1,
    y = 2;
console.log(x, y); //- 1,2
[x, y] = [y, x];
console.log(x, y); //- 2,1

// Deep Advanced Array 
const [e, [f, [g, h]]] = [1, [2, [
    [
        [3, 4], 5
    ], 6
]]];
console.log(`e:${e}, f:${f}, g:${g}, h:${h}`) //=> e:1, f:2, g:3,4,5, h:6