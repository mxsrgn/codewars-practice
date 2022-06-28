// function returns the number of occurances of a given argument found another

function strCount(str, letter){  
    let count = 0
    let arr = str.split('')
    if(str.length === 0){
      return 0
    }
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === letter){
        count += 1 
      }
    }
    return count 
  }