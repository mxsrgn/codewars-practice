//Function will return planet name based on id provided.
// This case makes use of the switch statement 
// original the function did not have the break statement which did not allow the function to priviode the correct output
// break statement needed to be added between each case to ensure the function would stop when the parameters would equal the case value
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
        break
    }
    
    return name
}