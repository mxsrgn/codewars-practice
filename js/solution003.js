// Returns the sum of two lowest positive number in an arrray  

function sumTwoSmallestNumbers(numbers) {  
    let sortedArr = numbers.sort(function(a, b){
      return a - b
    })
    
    return sortedArr[0] + sortedArr[1]
  }