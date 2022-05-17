// Function will return the amount of water need for a given amount amount clothes based on the load size of
// of the washer. 

function howMuchWater(water, load, clothes){
    let waterAmount = water * (1.1**(clothes-load))
    if (load * 2 < clothes){
      return 'Too much clothes'
    }else if (clothes < load){
      return 'Not enough clothes'
    }else{
      return Number(waterAmount.toFixed(2))
    }
  }