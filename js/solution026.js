// Function return new array where numbers that have a interger are returned and other that don't return a square

function squareOrSquareRoot(array) {
    return array.map(value => Math.sqrt(value) == Math.sqrt(value).toFixed(0) ? Math.sqrt(value) : value ** 2 )
    } 