/*Task 9*/


definePalindrom("А роза упала на лапу Азора");

function definePalindrom(str) {
  str = str.toLowerCase().split(" ").join("");
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr == str);
}