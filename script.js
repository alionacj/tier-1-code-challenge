// 1. Start with the number 29 and set that equal to a variable named highScore;
let highScore = 29;
console.log('High score scored in variable highScore.');
console.log(' - highScore =', highScore);

// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = [];
console.log('Created empty array myScrabbleTiles to store tiles tiles.');
console.log(' - myScrabbleTiles =', myScrabbleTiles);

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
myScrabbleTiles.push(
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
);
console.log('Added six tiles to array myScrabbleTiles.');
console.log(' - myScrabbleTiles =', myScrabbleTiles);

// 4. Remove the last tile from myScrabbleTiles and save it in a variable named removedTile.
let removedTile = myScrabbleTiles.pop();
console.log('Removed last tile', removedTile, 'from array.');
console.log(' - New tiles:', myScrabbleTiles);
console.log('removedTile now storing removed tile');
console.log(' - removedTile =', removedTile);

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
myScrabbleTiles.push({ tile: 'F', score : 4 });
console.log('Added new tile to myScrabbleTiles.');
console.log(' - myScrabbleTiles =', myScrabbleTiles);

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop to add up and return the sum of all the scores for a given array of scrabble tiles.

function calculateScore(tiles) {
  console.log('* Calculating total score.....');
  let scoreTotal = 0;
  for (let tile of tiles) {
    // add up and return sum of scores
    console.log('You have:', tile);
    console.log(' - Current points', scoreTotal, '+ tile score', tile.score, '=', scoreTotal += tile.score, 'points.');
  }
  console.log('Congratulations! you have a total score of', scoreTotal +'.');
  return scoreTotal;
}
calculateScore(myScrabbleTiles);  // QUESTION: there's probably a really stupid reason for this but I cant figure out why this is logging twice

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
let myScore = calculateScore(myScrabbleTiles);
console.log('Assigned the return of calculateScore() to new variable myScore.');
console.log(' - myScore:', myScore);

// 8. Check whether or not your score is higher than the highScore. If your score is higher, change highScore to the new high score.
if (myScore > highScore) {
  highScore = myScore;
  console.log('🎉🎉🎉 NEW HIGHSCORE!!! 🎉🎉🎉')  
  console.log('High score:', highScore);
}

// DONE!



console.log('       ----- testing code below -----')
console.log('       ----- testing code below -----')
console.log('       ----- testing code below -----')
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    highScore: typeof highScore !== 'undefined' ? highScore : undefined,
    myScrabbleTiles: typeof myScrabbleTiles !== 'undefined' ? myScrabbleTiles : undefined,
    removedTile: typeof removedTile !== 'undefined' ? removedTile : undefined,
    calculateScore: typeof calculateScore !== 'undefined' ? calculateScore : undefined,
    myScore: typeof myScore !== 'undefined' ? myScore : undefined,
  }
} catch (e) {
  // Do nothing
}
