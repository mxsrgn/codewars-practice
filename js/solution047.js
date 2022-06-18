// Function will return the largest number after completing every combination of a,b,c with [*+()]


function expressionMatter(a, b, c) {
    let firstCombo = a + b + c
    let secondCombo = (a + b) * c
    let thirdCombo = a * (b + c)
    let fourthCombo = a * b * c
    let valueArr = [firstCombo, secondCombo, thirdCombo, fourthCombo]
    return Math.max.apply(Math, valueArr)
  }