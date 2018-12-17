/*Task 4*/

var forSum = [5, 5, 78, 94, 3, 76];

console.time();
sumOfArrayElems(forSum);
console.timeEnd();

console.time();
sumOfArrayReduce(forSum);
console.timeEnd();




function sumOfArrayElems(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

function sumOfArrayReduce(arr) {
  var sumArray = arr.reduce(function(sum, curr){
    return sum + curr;
  });
  console.log(sumArray);
}

