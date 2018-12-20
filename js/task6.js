/*Task 6*/

var forComparing = [5, true, 87, false, 'hello', 54];

returnTheBiggestValue(forComparing);


function returnTheBiggestValue(arr) {
  var theBiggestValue = 0;
  for (var i = 0; i < arr.length; i++) {
    if (theBiggestValue < arr[i]) {
      theBiggestValue = arr[i];
    }
  }
  console.log(theBiggestValue);
}

