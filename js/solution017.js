//Function that converts the equivalent binary value to an integer when given an array of ones and zeroes

const binaryArrayToNumber = arr => {
  return Number.parseInt(arr.join(''), 2)
}