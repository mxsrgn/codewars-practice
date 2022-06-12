// Function returns the minimum and maximum value in an array

function minMax(arr){
    let sortedArr = arr.sort((a,b) => a - b)
    let minimum = sortedArr[0]
    let maximum = sortedArr[sortedArr.length - 1]
    return [minimum,maximum]
  }