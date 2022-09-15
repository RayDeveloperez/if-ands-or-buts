const prompt = require('prompt-sync')({sigint: true});
console.log("ROCK PAPER SCISSORS")

console.log("Player 1, enter rock, paper, or scissors:")
let Player1 = prompt(">>")
console.log("Player 2, enter rock, paper, or scissors:")
let Player2 = prompt(">>")

if (Player1 === "rock")
{
if (Player2 === "scissors") {
console.log("Player 1 WINS");
} else if (Player2 === "paper") {
console.log("Player 2 WINS")
} else if ( Player2 === "rock") {
console.log("DRAW")}
}

if (Player1 === "scissors")
{
if (Player2 === "paper") {
console.log("Player 1 WINS");
} else if (Player2 === "rock") {
console.log("Player 2 WINS")
} else if ( Player2 === "scissors") {
console.log("DRAW")}
}

if (Player1 === "paper")
{
if (Player2 === "rock") {
console.log("Player 1 WINS");
} else if (Player2 === "scissors") {
console.log("Player 2 WINS")
} else if ( Player2 === "paper") {
console.log("DRAW")}
}