const UTILITES = require('../shared/urilites');
const _ = {};

_.each = function (list, callback) {
    // handle list of type array
    if (Array.isArray(list)) {
        list.forEach((element, index, list) => {
            callback(element, index, list)
        });
    }
    // handle list of type object 
    if (typeof list === 'object') {
        for (const key in list) {
            if (list.hasOwnProperty(key)) {
                callback(list[key], key, list);
            }
        }
    }
};
const roomsArray = ['observatory', 'ballroom', 'library'];
const roomsObject = {
    name: 'Sweet A',
    no: 1
}
_.each(roomsArray, (room) => (UTILITES.log(room)));
/**
 * observatory
 * ballroom
 * library
 */

_.each(roomsObject, (room) => (UTILITES.log(room)))
/**
 * Sweet A 
 * 1
 */