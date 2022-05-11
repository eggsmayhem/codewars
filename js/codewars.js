// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'



function defineSuit(card) {
    let suit = card.split('').pop()
    switch(suit) {
        case '♣':
          return 'clubs';
          break;
        case '♦':
          return 'diamonds';
          break;
        case '♥':
          return 'hearts'
          break;
        case '♠':
          return 'spades';
          break;
    }
  }