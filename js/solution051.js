// Function returns the merged sorted arrays with no duplicates

function mergeArrays(arr1, arr2) {
    let mergedArr = arr1.concat(arr2)
    let noduplicates = mergedArr.filter((a, b) => mergedArr.indexOf(a) === b)
    let sortedArr = noduplicates.sort((a, b) => a - b )
    return sortedArr
  }