//Function returns the suit of a given deck 

function defineSuit(card) {
    if (card.charAt(card.length -1) ==='♣'){
      return 'clubs'
    }else if (card.charAt(card.length -1) === '♦'){
      return 'diamonds'
    }else if (card.charAt(card.length -1) === '♥'){
      return 'hearts'
    }else if (card.charAt(card.length -1) === '♠'){
      return 'spades'
    }
  }