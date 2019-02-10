// import lodash
const _ = require('../shared/lodash');
const _lib = require('lodash');

// * using lodash library 
_lib.reduce([1, 2, 3, 4, 5], (prev, sum) => prev + sum, 0); // 15

// * using my implementation 
_.reduce([1, 2, 3, 4, 5], (prev, sum) => prev + sum, 0); // 15