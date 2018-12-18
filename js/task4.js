/*Task 4*/

var randomArray = [5, 6, 9, "hello world", true];

function shakeArray(a, b) {
  return Math.random() - 0.5;
}

randomArray.sort(shakeArray);
console.log(randomArray);

