// Function return every digit in a number squared and concatenated

function squareDigits(num){
    let numArr = String(num).split('')
    for(let i = 0; i < numArr.length; i++){
      numArr[i] = numArr[i]**2
    }
    return Number(numArr.join(''))
  }