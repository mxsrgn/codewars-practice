// Functions returns the number of vowels in a given string

function getCount(str) {
    let vowelsCount = 0;
    let vowels = 'aeiou'.split('')
    str.split('').forEach(function(a){
      if (vowels.indexOf(a) !== -1){
        vowelsCount++
      }
    })
    
    return vowelsCount;
  }



// Similar function that also dilivers the same result

// function getCount(str) {
//     var vowelsCount = 0
//     var vowels = ["a","e","i","o","u"]
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j<vowels.length;j++){
//         if(str[i] === vowels[j]){
//           vowelsCount++
//         }
//       }
//     }
    
//     return vowelsCount