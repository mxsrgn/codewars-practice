// funtion returns a string with all numbers removed from string

function stringClean(s){
  let noNumberStr = ''
  for (let i = 0; i < s.length; i++){
    if(isNaN(s[i]) || s[i] == ' ')
      noNumberStr += s[i]
    }
  return noNumberStr
  }