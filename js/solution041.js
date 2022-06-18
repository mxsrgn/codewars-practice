//function return the sum of number of an arrays with nested arrays of numbers

function stairsIn20(s){
    return s.reduce((totalSteps, day) => totalSteps.concat(day)).reduce((previousValue,currentValue)=> previousValue + currentValue) * 20
  }