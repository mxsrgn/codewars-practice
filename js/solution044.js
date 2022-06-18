//Function returns how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let sonTwice = sonYearsOld * 2
    if(sonTwice > dadYearsOld){
      return sonTwice - dadYearsOld
    }else if(sonTwice === dadYearsOld){
      return 0
    }
    for(let i = 0; i < dadYearsOld; i++){
      if( i/2 === sonYearsOld){
        return dadYearsOld - i
      }
    }
  }

// Simpler function

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs(dadYearsOld - 2 * sonYearsOld);
//   }
