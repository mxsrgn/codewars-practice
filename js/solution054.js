// Function returns string where 9s are removed if between two 7s

function sevenAte9(str) {
    let result = ''
    for(let i = 0; i < str.length; i++){
      result += str[i]
      if(str[i] == 7 && str[i + 1] == 9 && str[i + 2] == 7){
         i++
       }
    }
      return result
    }