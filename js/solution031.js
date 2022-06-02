// Function retrun first name and last name given in a string swapped

function nameShuffler(str){
    let arr = str.split(' ')
    let newName = [arr[0], arr[1]] = [arr[1], arr[0]]
    return newName.join(' ')
  }

  // a simpler method would be to use .reverse()

//   function nameSuffle(str){
//     return str.split(' ').reverse().join(' ')
//   }