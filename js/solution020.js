// Function returns the sum of the differences between consecutive pairs in an array in decending order

function sumOfDifferences(arr) {
    let sortedArr = arr.sort((a,b) => b - a)
    let sum = 0
    let diff = 0
    for (let i = 0; i < sortedArr.length - 1; i++){
      diff = sortedArr[i] - sortedArr[i + 1]
      sum += diff
    }
    return sum
  }


  // Alaternate solution

//   function sumOfDifferences(arr) {
//     return arr.sort((a,b) => b-a).reduce((acc, curr, index, array) => {const next = array[index +1]
//     if (!isNaN(curr - next)){
//       acc += curr - next
//     } return acc
//     },0)
//   }