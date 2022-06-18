
// Sorts only the odd numbers in an array leaving any even numbers in their positions

function sortArray(array) {
    const oddNumbers = array.filter(n => n % 2)
    const sortOdds = oddNumbers.sort((a,b) => a-b)
    
    const result = array.map(array => array % 2 ? sortOdds.shift() : array)
    
    return result
  }