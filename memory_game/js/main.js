//console.log('up and running!');
/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/
//console.log("user flipped " + cardOne);
//console.log("user flipped " + cardTwo);
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch()
{
    if (cardsInPlay.length === 2)
    {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again.");
        }
    }
    else
    {
        return;
    }
}
function flipcard(cardID)
{
  
   console.log( "User flipped " + cards[cardID]);
   cardsInPlay.push(cards[cardID]);
   checkForMatch();

}
flipcard(0);
flipcard(2);