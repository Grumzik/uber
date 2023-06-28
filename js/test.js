function filter_list(l) {
  // Return a new array with the strings filtered out
  var arr = [];
 
  
  arr = l.filter(elem => Number.isInteger(elem));
  return arr;
}
var fff =  filter_list([1,2,'a','b']);

function numberOfPairs(gloves)
{
  var pair = 0;

  gloves.sort();
  
  for (var i=0; i<(gloves.length -1); i++){
    if (gloves[i] === gloves[i+1]) {
      pair++;
      i++;
    }
  }
  return pair;
}


numberOfPairs(['gray','black','purple','purple','gray','black']);

function numberOfPairs2(gloves) {

  var pairs = 0,  counts = {};
  
  for (var color of gloves) {
  
    if (!counts.hasOwnProperty(color))
      counts[color] = 0;

    if (++counts[color] === 2) {
      counts[color] -= 2;
      pairs++;
    }
  }
    
  return pairs;
}
numberOfPairs2(['gray','black','purple','purple','gray','black']);
