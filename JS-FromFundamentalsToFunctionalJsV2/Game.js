const _ = require('./shared/underscore');

const GAME = {};

GAME['suspects'] = [];
GAME.suspects.push({
    name: 'Rusty',
    color: 'orange'
});
GAME.suspects.push({
    name: 'Miss Scarlet',
    color: 'red'
});


console.log(GAME);

// Game Loop  
let message = '';
for (let index = 0; index < GAME.suspects.length; index++) {
    const suspect = GAME.suspects[index];
    message = (suspect.name === 'Rusty') ? 'Found\'s me ' : 'Next time';
    console.log(message)
    /**
     * first Time   => Found's me 
     * second Time  => Next time
     */
}

const createSuspectObjects = (name) => ({
    name: name,
    color: name.split(' ')[1],
    speak: () => (console.log(`my name is ${name}`))
});
const suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

_.each(suspects, (suspect) => GAME.suspects.push(createSuspectObjects(suspect)));
console.log(GAME);