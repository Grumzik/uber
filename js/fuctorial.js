function fuct(n){
  let pr = 1;
  for (let i =1; i<=n ; i++){
    pr = pr*i;
  }
  return pr;
}

console.log("total: " + fuct(7));

function factorial(n){
  var result = 1;
  while(n){
      result *= n--;
  }
  return result;
}

console.log("total: " + factorial(7));

function fuct(n){
  let pr = 1;
  function fpr(i){
    pr = pr*i;
    if(i<n) {
      fpr(++i, pr)
    }
  }
  fpr(1,1);
  return pr;
}

console.log("total: " + fuct(7));



function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}
console.log("total: " + factorial(7));


function factorial(n, result){
  result = result || 1;
  if(!n){
      return result;
  }else{
      return factorial(n-1, result*n);
  }
}
console.log("total: " + factorial(7));