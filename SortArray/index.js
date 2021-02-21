//sort array
const array = ["Rajesh","Rakesh","Ram","Raj"];
array.sort();
console.log(array);

// sort number
const number = [1, 30, 4, 21, 6];
number.sort();
console.log(number);

//sort in assending and decending order
const assnArray = [140, 6 ,104, 99, 1];
assnArray.sort(function(a, b) {
  return a - b;
});
console.log(assnArray);