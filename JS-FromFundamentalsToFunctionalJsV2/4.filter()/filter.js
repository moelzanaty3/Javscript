const SUSPECTS = require('../shared/data');
const _ = require('../shared/underscore');

_.filter(SUSPECTS, (suspect) => {
    return suspect.name === 'Miss Scarlet';
});