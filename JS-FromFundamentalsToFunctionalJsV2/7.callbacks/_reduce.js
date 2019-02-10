// import lodash
const lodash = require('../shared/lodash');
const lodashLib = require('lodash');

// * using lodash library 
lodashLib.reduce([1, 2, 3, 4, 5], (prev, sum) => prev + sum, 0); // 15

// * using my implementation 
lodash.reduce([1, 2, 3, 4, 5], (prev, sum) => prev + sum, 0); // 15