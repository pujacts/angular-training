let arr = [1,1,1,1,1,1,2,2,2,3,4,5,33,10,6,7,33];

//remove duplicate from collection
var set = new Set();
arr.forEach(n=>set.add(n));
set.forEach(n=>console.log(n));