'use strict';

const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9',
  '10', 'Jack', 'Queen', 'King', 'Ace'];

function randomCardIndex(deck) {
  return Math.floor(Math.random() * deck.length);
}

function shuffle(deck) {
  for (let counter = 0; counter < 400; counter += 1) {
    const randomIndex1 = randomCardIndex(deck);
    const randomIndex2 = randomCardIndex(deck);
    const tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }
}

function createDeck() {
  const allCards = () => SUITS.reduce((deck, suit) => {
    RANKS.forEach((rank) => deck.push(`${rank} of ${suit}`));
    return deck;
  }, []);

  const deck = allCards();
  shuffle(deck);

  return deck;
}

console.log(createDeck());
