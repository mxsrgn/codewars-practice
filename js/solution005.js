//Counts the numbers of duplictes in a string

// Initial Solution
function duplicateCount(text){
    let lowerText = text.toLowerCase() //changes characters to lowecase
    let obj = {} // creates an empty object
    let numberOfDuplicates = 0 // creates a counter that will increase as number of duplicates is determined
    for ( let i = 0; i < lowerText.length; i++) 
    // assigns the characters in the string as properties and gives them a value of 1
      if (!obj[lowerText[i]]){
        obj[lowerText[i]] = 1 
      }// checks if the character is already added
      else if (obj[lowerText[i]] < 2){
        obj[lowerText[i]] += 1
        numberOfDuplicates++
      }
    return numberOfDuplicates
  }



  // ALternate solution 


  function duplicateCount(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }