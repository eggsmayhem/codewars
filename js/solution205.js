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
