// returns the number of consecutive vowels in a string

function getTheVowels(word) {
    let vowels = 'aeiou'
    let count = 0
    word.split('').forEach(i => count += (i === vowels[count % vowels.length] ? 1 : 0))
    return count
    }