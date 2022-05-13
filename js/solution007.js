// Function that privdes the total cost of a car rental over n number of days and provides a discount at 7 or more days and a different discount at 3 or more days 

// Create a function that will tell us the cost of car rental for n number of days.
// Each day is $40 
// However if n > 7, then totalCost - $50 
// and if n > 3, the totalCost - $20

function rentalCarCost(d) {
    if (d >= 7){
      return (d * 40) - 50
    }else if (d >= 3){
      return (d * 40) - 20
    }else{
      return d * 40
    }
  }
