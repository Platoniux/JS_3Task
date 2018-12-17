/*Task 4*/

var randomArray = [5, 6, 9, "hello world", true];


shakeArray(randomArray);


function shakeArray(arr) {
  var index = 0;
  for (var i = 0; i < arr.length; i++) {
    index = Math.floor(Math.random() * arr.length);
    var itemAtIndex = arr[index];
    arr[index] = arr[i];
    arr[i] = itemAtIndex; 
  }
  console.log(arr);
}

