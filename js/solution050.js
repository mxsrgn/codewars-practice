// Function returns corrected string by replacing numbers with correct characters

function correct(string){
    let stringArr = string.split('')
    for(let i = 0; i < stringArr.length; i++){
      if(stringArr[i] == ' '){
        stringArr[i] = ' '
      }else if(stringArr[i] == 5){
        stringArr[i] = 'S'
      }else if(stringArr[i] == 0){
        stringArr[i] = 'O'
      }else if(stringArr[i] == 1){
        stringArr[i] = 'I'
      }
    }
    return stringArr.join('')
  }