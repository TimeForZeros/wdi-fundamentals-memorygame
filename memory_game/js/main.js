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
var cardElement;
var score = 0;

function checkForMatch()
{
    
   if (cardsInPlay.length === 2)
    {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!\n" + "Your score: " + ++score);
        } else {
            alert("Sorry, try again. \n" + "Your score: " + score);
        }
        cardsInPlay.length = 0;
    }
    else
    {
        return;
    }
}
function flipcard()
{
    cardID = this.getAttribute('data-id');
    console.log( "User flipped " + cards[cardID].rank);
    console.log("of " + cards[cardID].suit);
    console.log(cards[cardID].cardImage);
    cardsInPlay.push(cards[cardID].rank);
    this.setAttribute('src', cards[cardID].cardImage);
    checkForMatch();

}
function createBoard()
{
    for (var i = 0; i < cards.length; i++) 
    {
        cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener("click", flipcard);
        document.getElementById("game-board").appendChild(cardElement);
    }
}

createBoard();
//Testing new repository from new computer.