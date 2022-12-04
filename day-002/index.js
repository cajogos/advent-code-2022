const Utils = require('../utils');

// const input = Utils.getInput('day-002/input.txt');
const input = `
A Y
B X
C Z
`;

/*
A - Rock
B - Paper
C - Scissors

X - Rock // Lose
Y - Paper // Draw
Z - Scissors // Win

Shape points:
- Rock: 1
- Paper: 2
- Scissors: 3

Outcomes:
- Lost: 0
- Draw: 3
- Won: 6
*/

let countPoints = (playerOne, Opponent) =>
{
    let points = 0;

    let decryptedA = getDecrypted(playerOne);
    if (decryptedA === 'Rock') points += 1;
    if (decryptedA === 'Paper') points += 2;
    if (decryptedA === 'Scissors') points += 3;

    let outcome = getResult(playerOne, Opponent);
    if (outcome === 'Draw') points += 3;
    if (outcome === 'Win') points += 6;

    return points;
};

let getDecrypted = (encrypted) =>
{
    switch (encrypted)
    {
        case 'A': return 'Rock';
        case 'B': return 'Paper';
        case 'C': return 'Scissors';
    }
    throw Error('Cannot determine decrypted');
};

let getRigged = (value) =>
{
    switch (value)
    {
        case 'X': return 'Lose';
        case 'Y': return 'Draw';
        case 'Z': return 'Win';
    }
    throw Error('Cannot determine rigged');
};

let getResult = (playerA, playerB) =>
{
    let decryptedA = getDecrypted(playerA);
    let decryptedB = getDecrypted(playerB);

    if (decryptedA === decryptedB) return 'Draw';

    switch (decryptedA)
    {
        case 'Rock': // Rock
            if (decryptedB === 'Paper') return 'Lose';
            if (decryptedB === 'Scissors') return 'Win';
        case 'Paper': // Paper
            if (decryptedB === 'Rock') return 'Win';
            if (decryptedB === 'Scissors') return 'Lose';
        case 'Scissors': // Scissors
            if (decryptedB === 'Rock') return 'Lose';
            if (decryptedB === 'Paper') return 'Win';
    }
    throw Error('Cannot determine result');
};


let totalPoints = 0;
let rounds = input.trim().split('\n');
rounds.forEach(round =>
{
    let [opponent, player] = round.trim().split(' ');

    let roundScore = countPoints(player, opponent);

    console.log(`${opponent}-${player} = ` + roundScore);

    totalPoints += roundScore;
});

console.log('Total points: ' + totalPoints);
