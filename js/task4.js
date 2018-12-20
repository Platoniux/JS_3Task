/*Task 4*/

var randomArray = [5, 6, 9, 'hello world', true];

randomArray.sort(shakeArray);
console.log(randomArray);


function shakeArray(a, b) {
  return Math.random() - 0.5;
}

