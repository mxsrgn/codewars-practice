// Function accepts three parameter to determine if the capacity of a bus can accept more passengers based on the number that is already on
//the bus and how many are waiting

function enough(cap, on, wait) {
    return cap - on >= wait ? 0 : wait - (cap - on)
  }