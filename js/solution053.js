//Function return array caintaining indexes of capital letter in a string

var capitals = function (word) {
    let wordArr = word.split('')
    let orderedList = []
    for(let i = 0; i < wordArr.length; i++){
      if(wordArr[i] === wordArr[i].toUpperCase()){
       orderedList.push(i)
      }
    }
    return orderedList
  }