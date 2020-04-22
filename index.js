// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * in counter2, count is a global variable. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter1 uses closure.  you can tell because count is declared inside of the function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * counter1 would be preferable if you have multiple games you want to keep a count for.  counter2 would be better if only have one score youre keeping track of and you want to access the score somewhere else in your code. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random()*3); 
}


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 


function finalScore(inning, num){
  // blank scores to hold inning scores
  let home = 0; 
  let away = 0; 

  // add score for each inning up to num 
  for (i=0; i<num; i++) {
    home += inning(); 
    away += inning();
  }

  const final = {"Home": home, "Away": away};

  // returns object {'home': home_score, 'away': away_score}
  return final; 
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */


function getInningScore(inning){

  let home = 0; 
  let away = 0; 
  return function() {

    const runGen = inning(); 
    home += inning(); 
    away += inning(); 
    return `${away} - ${home}`
  }
}

function scoreboard(getInningScore, inning, num) {

  const innScore = getInningScore(inning); 

  for (let i=0; i<num-1; i++){
    console.log(`Inning ${i+1}: ${innScore()}`);
  }

  return `Final Score: ${innScore()}`
}


