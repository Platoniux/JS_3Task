/*Task 3*/

var scoresOfStudents = {
  Anna: 29,
  Misha: 35,
  Stepan: 1,
  Elena: 99
}


returnTheBestStudent(scoresOfStudents);



function returnTheBestStudent(obj) {
  var maxScore = 0;
  var theBestStudent = "";
  for (var name in obj) {
    if (obj[name] > maxScore) {
      maxScore = obj[name];
      theBestStudent = name;
    }
  }
  console.log("The best student is " + theBestStudent);
}

