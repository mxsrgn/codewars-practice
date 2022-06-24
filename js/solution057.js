// Function return numbers in a array that are dividible by a given divisor

function divisibleBy(numbers, divisor){
    return numbers.filter(n => n % divisor === 0)
  }