const _ = {};

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
_.reduce = function (collection, cb, accumulator) {
  let accumulated = accumulator;
  collection.forEach((element, index) => {
    accumulated = (index === 0 && accumulated === undefined) ? element : cb(element, accumulated);
  });
  return accumulated;
}

module.exports = _;