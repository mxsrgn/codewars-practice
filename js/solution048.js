// Function Returns a string with alternate cases


String.prototype.toAlternatingCase = function () { 
    return this.split('').map((i) => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join('')
  }