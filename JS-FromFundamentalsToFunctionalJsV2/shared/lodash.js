const lodash = {};

/**
 * Reduces collection to a value which is the accumulated result of running each element
 * in collection thru iteratee, where each successive invocation is supplied the return
 * value of the previous. If accumulator is not given, the first element of collection
 * is used as the initial value
 * 
 * @param collection 
 * @param cb 
 * @param accumulator 
 * * loop throgh the list 
 * *  call the cb with arr[i], prev/initial 
 * *  save the return value 
 * * return result 
 */
lodash.reduce = function (collection, cb, accumulator) {
  let accumulated = accumulator;
  collection.forEach((element, index) => {
    accumulated = (index === 0 && accumulated === undefined) ? element : cb(element, accumulated);
  });
  return accumulated;
}
/**
 * * Currying is a popular technique in functional programming. It helps with partial application. 
 * The idea is as follows: 
 *  * If you don't provide all parameters for a function, it returns a function whose input are the remaining parameters and whose output is the result of the original function.
 */
lodash.curry = function (func) {
  return (arg) => {
    return (arg2) => {
      return func(arg)(arg2);
    }
  }
}
module.exports = _;