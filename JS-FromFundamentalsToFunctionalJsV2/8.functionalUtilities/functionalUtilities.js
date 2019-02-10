const lodash = require('lodash');
const _ = require('underscore');

// Curring
/**
 * Currying is a popular technique in functional programming. It helps with
 * partial application. 
 * The idea is as follows: 
 *  * If you don't provide all parameters for a function, it returns a function whose input are the remaining parameters and whose output is the result of the original function.
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 */
const abc = (a, b, c) => ([a, b, c]);
const curried = lodash.curry(abc);
curried(1)(2)(3); //=> [1,2,3]
curried(1, 2)(3); //=> [1,2,3]


// Composing -> when u take two function and compoine them.
const consider = (name) => (`I think it could be ... ${name}`);
const exclaim = (statument) => (`${statument.toUpperCase()}!`);
const blame = _.compose(consider, exclaim);
blame('you'); //=> I think it could be ... YOU!