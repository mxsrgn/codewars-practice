//Function returns the age of an individual as anumber when provided as a string

function getAge(inputString){
    let inputStringArr = inputString.split('')
    return Number(inputStringArr[0])
    }