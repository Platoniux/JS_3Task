/*Task 7*/

var simpleArray = [1, 2, 3, 4];

getSubArrays(simpleArray);



function getSubArrays(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
      newArr.push(arr.slice(i, j + 1));
    }
  }
  console.log(newArr);
}

