const lodash = require('lodash');
const _ = require('underscore');

// Curring
/**
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