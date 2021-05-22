class Deck {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for (let suit in suits) {
            for (let value in values) {
                this.deck.push([values[value], suits[suit]]);
            }
        }

    }
}

const deck = new Deck();
const deckToShuffle = deck.deck;

const shuffleDeck = (deck) => {
    let result = [];

    for (let i = 0; i < deck.length; i++) {
        current = deck[Math.floor(Math.random() * deck.length)]
        
        result.push(current)
    }

    return result 

}

console.log(shuffleDeck(deckToShuffle))

const displayDeck = () => {
    let deckOnPage = shuffleDeck(deckToShuffle);
    let deckJSON = JSON.stringify(deckOnPage);

    document.querySelector('.container').innerHTML = deckJSON;
}

const clearDeck = () => {
    document.querySelector('.container').innerHTML = '';
}

// append result from shuffleDeck to div container

// makes an item in the cards array into a div, then adds the text of the item to the div
// const makeCardDiv = (item) => {
//     const $card = $('div').addClass('card');
//     $card.text(item);

//     return $card // not sure if necessary
// }


// // adds the card div to an array of 52
// const addCardToDeck = (card) => {
//     let deckArr = new Array(52);
//     deckArr.push(card);

//     return deckArr

// }

// const showDeck = (arr) => {
//     ('.container').append(arr);
// }


// $(() => {
//     showDeck(shuffleDeck(deckToShuffle))
// })


// const makeCard = (arr) => {

//     for (let i= 0; i < arr.length; i++) {
//         let $card = ('<li>');
//         $card.text(arr[i])
//         $('.container').append($card)
//     }
// }

// $(() => {
//     makeCard(shuffleDeck(deckToShuffle))
// })