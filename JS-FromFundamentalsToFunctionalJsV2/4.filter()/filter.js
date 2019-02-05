const VIDEODATA = require('./data');
const _ = require('../shared/underscore');

_.filter(VIDEODATA, (element) => {
    return element.name === 'Miss Scarlet';
});