// Function returns phrase in an array based on the number of petals given

//
function howMuchILoveYou(nbPetals) {
    let arr = ['I love you','a little','a lot','passionately','madly','not at all']  
    return arr[(nbPetals - 1) % arr.length]
  }


// Alternative function


// function howMuchILoveYou(nbPetals) {
//     let arr = ['I love you','a little','a lot','passionately','madly','not at all']  
//     for (let i = 0; i <= nbPetals - 1; i++){
//         if (i === nbPetals -1){
//           return arr[i % 6]
//         }
//       }
//   }


