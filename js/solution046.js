//Function returns short long short form og the string surrounding he largest string with the smallest string given

function solution(a, b){
    if( a.length > b.length){
      return b + a + b  
    }else if(a.length < b.length){
      return a + b + a
    }
  }
  