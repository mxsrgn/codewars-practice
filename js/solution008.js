// Function that removes exclamation marks from a string

function removeExclamationMarks(s) {
    return s.split('').filter(a => a !== '!').join('')
  }