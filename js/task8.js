/*Task 8*/

var theBiggestSubArr = [1, -2, 3, 4, -9, 6];

returnTheBiggestSumOfSubArr(theBiggestSubArr);



function returnTheBiggestSumOfSubArr(arr) {
  var theBiggestSum = 0;
  for (var i = 0; i < arr.length; i++) {
    var interSum = 0;
    for (var j = i; j < arr.length; j++) {
      interSum += arr[j];
      theBiggestSum = Math.max(theBiggestSum, interSum);
    }
  }
  console.log(theBiggestSum);
}