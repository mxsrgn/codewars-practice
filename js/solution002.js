// Removes Every Second element from an array and always keeps the first element 

function removeEveryOther(arr){
    return arr.filter(function(x,i){
      return i % 2 === 0
  })
}


// Another working solution

function removeEveryOtherElement(arr){
    for (let i = 0; i < arr.length; i++){
        arr.splice(i,1)
    }
    return arr
}

