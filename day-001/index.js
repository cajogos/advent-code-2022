const Utils = require('../utils');

const input = Utils.getInput('day-001/input.txt');

const elvesCalories = input.split("\n\n");

let elves = [];

let maxCalories = 0;
elvesCalories.forEach(elfCalories =>
{
    let totalCalories = 0;
    let calories = elfCalories.split("\n");
    calories.forEach(calorie =>
    {
        totalCalories += parseInt(calorie);
    });
    elves.push(totalCalories);
});

// sort array in descending order
elves.sort((a, b) => b - a);

let topThree = elves.slice(0, 3);
let total = topThree.reduce((a, b) => a + b, 0);

console.log('Total calories: ' + total);