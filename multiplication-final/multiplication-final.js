//Multiplication quiz - coded by Eli S.

//initalize variables
var x;
var y;
var solution;
var userInput;
//var stop = false;
var wrong = 0;
var num = prompt("How many questions do you want?"); //ask for hoy many questions you want
var i;
for (i=1;i<=num;i++){ //for loop, starts at 1 and ends when the number is above what num was set to
  multiPractice();
}
var correctAnswers = num-wrong; //sets correctAnswers to num - wrong.
//alert("wrongAnswers is now at "+wrong);
if (correctAnswers == num) alert("You're winner!"); //if no answers are wrong...
else alert("Out of "+num+" question(s), you got "+correctAnswers+" correct.");

function multiPractice(){
  x = Math.floor(Math.random()*7)+3; //sets X to a random number between 3 and 9
  y = Math.floor(Math.random()*7)+3; //sets Y to a random number between 3 and 9
  solution = x*y; //sets the solution to X times Y
  userInput = prompt("Question "+i+": What is "+x+" * "+y+"?");
  if (userInput == "Stop" || userInput == "stop"){ //if the user inputted "stop" or "Stop"...
    //stop = true;
    alert("Question "+i+" has been stopped.");
    wrong++; //increments wrong by 1.
  } else if (userInput == solution) {
    alert("You got it correct! "+x+" * "+y+" = "+solution+".");
  } else {
    alert("That's incorrect. Going to next question.");
    wrong++; //increments wrong by 2.
  }
  //alert("wrongAnswers is "+wrong);
  return wrong; //returns wrong to the main function.
}
