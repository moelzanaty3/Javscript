const GAME = {
    suspects: [{
            name: 'Rusty',
            color: 'orange'
        },
        {
            name: 'Miss Scarlet',
            color: 'red'
        }
    ]
};

GAME['suspects'].forEach(suspect => (console.log(`Suspect name is ${suspect.name}, and Fav color is ${suspect.color}`)));
/** 
 * Suspect name is Rusty, and Fav color is orange
 * Suspect name is Miss Scarlet, and Fav color is red
 */