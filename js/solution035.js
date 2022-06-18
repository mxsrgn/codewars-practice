function titleCase(title, minorWords) {
    // when empty string is input retunr empty string    
      if(title.length === 0){
          return ''
        }
    //when no minor words are given capatilize every word
      if(arguments.length === 1 || minorWords === undefined) {
        title = title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
      }else{
    //minorWords Array 
        minorWords = minorWords.split(' ')
    // convert title string to array
        title = title.split(' ')
    // capatitalize the fist word
        let firstWord = title[0].charAt(0).toUpperCase() + title[0].slice(1).toLowerCase()
    // remove first word from array capitalize remaining words except minorWords
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