// http://csbin.io/callbacks

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
    return word + 's';
}

// uncomment these to check your work
console.log(addS('pizza')); // pizzas
console.log(addS('bagel')); // bagels


// Challenge 3
function map(array, callback) {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        results.push(callback(array[i], i, array));
    }
    return results;
}

function multiplyByTwo(num) {
    return num * 2;
}
console.log(map([1, 2, 3, 4, 5], multiplyByTwo)); // [ 2, 4, 6, 8, 10 ]


// Challenge 4
function forEach(array, callback) {
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    }
}
// see for yourself if your forEach works!
let alphabet = '';
let letters = ['a', 'b', 'c', 'd'];
forEach(letters, function (char) {
    alphabet += char;
});
console.log(alphabet); // abcd



//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let results = [];
    if (Array.isArray(array)) {
        array.forEach((element, index, array) => results.push(callback(element, index, array)))
    }
    return results;
}
console.log(mapWith([1, 2, 3, 4, 5], multiplyByTwo)); // [ 2, 4, 6, 8, 10 ]

//Extension 2
function reduce(array, callback, initialValue) {

}

//Extension 3
function intersection(arrays) {

}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) {

}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {

}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {

}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }