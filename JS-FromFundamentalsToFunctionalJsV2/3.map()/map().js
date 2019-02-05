const _ = require('../shared/underscore');


const weapons = ['candlestick', 'lead pipe', 'revolver'];
const weaponsObj = {
    'weapons': 'candlestick',
    'lead pipe': 'revolver',
    'weaponsArr': ['candlestick', 'lead pipe', 'revolver']
}
const brokenWeapons = _.map(weapons, (weapon) => (`broken ${weapon}`));
console.log(brokenWeapons); //=> [ 'broken candlestick', 'broken lead pipe', 'broken revolver' ]
const brokenWeaponsObj = _.map(weaponsObj, (weapon) => (`broken ${weapon}`))
console.log(brokenWeaponsObj)
/** 
 * [ 'broken candlestick',
 * 'broken revolver',
 * 'broken candlestick',
 * 'broken lead pipe',
 * 'broken revolver' ]
 */