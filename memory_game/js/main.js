//console.log('up and running!');
/*var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";*/
//console.log("user flipped " + cardOne);
//console.log("user flipped " + cardTwo);
var cards = 
[
    {
       rank: "queen",
       suit: "hearts",
       cardImage: "images/queen-of-hearts.png" 
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png" 
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];
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
  
   console.log( "User flipped " + cards[cardID].rank);
   console.log("of " + cards[cardID].suit);
   console.log(cards[cardID].cardImage);
   cardsInPlay.push(cards[cardID].rank);
   //cardsInPlay.push(cards[cardID].suit);
   //cardsInPlay.push(cards[cardID].cardImage);
   checkForMatch();

}
flipcard(0);
flipcard(2);