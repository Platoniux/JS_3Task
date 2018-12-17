/*Task 1*/


var resultOfResearches = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59, 60];
var theBestResult = 0;

evaluateResearches(resultOfResearches);

groupingTheBestResults(resultOfResearches);




function evaluateResearches(arr) {
  theBestResult = arr[0];
  for (var i = 0; i < arr.length; i++) {
    console.log("Образец под номером " + (i + 1) + " - рузультат - " + arr[i]);
    if (arr[i] > theBestResult) {
      theBestResult = arr[i];
    }
  }
  console.log("Всего проведено исследований: " + i);
  console.log("Наилучший результат: " + theBestResult);
}

function groupingTheBestResults(arr) {
  var groupOfTheBestResults = [];
  for (var i = 0; i < arr.length; i++) {
    if (theBestResult == arr[i]) {
      groupOfTheBestResults.push(i + 1);
    }
  }
  console.log("Образцы с наилучшими результатами под номерами: " + groupOfTheBestResults);
}








