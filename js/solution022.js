// Function that replaces every word in a string with Freud's explanation to everything

function toFreud(string) {
    let strArr = string.split(' ')
    for (let i = 0; i < strArr.length; i++){
      if (strArr[i] === ''){
        strArr[i] = ''
      }else if (strArr[i] != 'sex'){
        strArr[i] = 'sex'
      }
    }
  return strArr.join(' ')
  }