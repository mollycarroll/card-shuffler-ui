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