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

function numberOfPairs(gloves) {

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
numberOfPairs(['gray','black','purple','purple','gray','black']);

function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}
likes(["Alex", "Jacob", "Mark", "Max"]);


function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}