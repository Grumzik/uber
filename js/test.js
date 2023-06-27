function filter_list(l) {
  // Return a new array with the strings filtered out
  var arr = [];
 
  
  arr = l.filter(elem => Number.isInteger(elem));
  return arr;
}
var fff =  filter_list([1,2,'a','b']);

