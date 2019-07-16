//console.log('up and running!');
/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/
//console.log("user flipped " + cardOne);
//console.log("user flipped " + cardTwo);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardsInPlay[0]);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardsInPlay[1]);
if (cardsInPlay.length === 2)
{
    console.log("This is working!");
}
else 
{
    console.log("This isn't working...");
}
if (cardsInPlay[0] === cardsInPlay[1])
{
    alert("You found a match!");
}
else 
{
    alert("Sorry, try again.");
}