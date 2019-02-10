const SUSPECTS = require('../shared/data');
const _ = require('../shared/underscore');

const suspectNames = [];
_.filter(SUSPECTS, (suspect) => {
    suspectNames.push(suspect.name);
});

console.log(suspectNames);
/**
 * [ 
 *  'Miss Scarlet',
 *  'Mrs. White',
 *  'Reverend Green',
 *  'Rusty',
 *  'Colonel Mustard',
 *  'Professor Plum'
 *  ]
 */

//  Spread Operator & Arguments
const createTuples = function (a, b, c, ...d) {
    // console.log(arguments);
    return [
        [a, b],
        [c, d]
    ]
};
const newArr = createTuples('it', 'can', 'done', 'with', 'spread', 'operator');
console.log(newArr);
/**
 * [ [ 'it', 'can' ],
 *   [ 'done', 
 *      [ 'with', 'spread', 'operator' ] 
 * ] ]
 */

//  Default Parameters 
const add = (a, b = 2) => (a + b);
add(2); //=> 4


const constructArrayWithArguments = function () {
    // turn an arguments from sudo array to actual array 
    // from  [Arguments] { '0': 'Mohammed', '1': 'Elzanaty' } 
    // to    ['Mohammed', 'Elzanaty']
    const arr = Array.prototype.slice.call(arguments); // Array.prototype.slice.call(arguments) === Array.from(arguments) in ES6 
    return arr.join(' ');
}

const name = constructArrayWithArguments('Mohammed', 'Elzanaty');
console.log(name); // Mohammed Elznanaty