const _ = require('../shared/underscore');


const roomsArray = ['observatory', 'ballroom', 'library'];
const roomsObject = {
    name: 'Sweet A',
    no: 1
}
_.each(roomsArray, (room) => (console.log(room)));
/**
 * observatory
 * ballroom
 * library
 */

_.each(roomsObject, (room) => (console.log(room)))
/**
 * Sweet A 
 * 1
 */