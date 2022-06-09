function titleCase(title, minorWords) {
    // when empty string is input retunr empty string    
      if(title.length === 0){
          return ''
        }
    //when no minor words are given capatilize every word
      if(arguments.length === 1 || minorWords === undefined) {
        title = title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
      }else{
        minorWords = minorWords.split(' ')
        title = title.split(' ')
        let firstWord = title[0].charAt(0).toUppercase() + title[0].slice(1).toLowerCase()
        title = title.slice(1).map(word => {
          for(let i = 0; i < minorWords.length; i++){
          if (word.toLowerCase() === minorWords[i].toLowerCase()){
              return word.toLowerCase()
              }
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    title = firstWord + ' ' + title.join(' ')
    }
    return title.trim()
}