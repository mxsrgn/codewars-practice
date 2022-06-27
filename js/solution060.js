// Function filters out string from an array

function filter_list(l) {
    return l.filter(x => typeof x === 'number')
  }