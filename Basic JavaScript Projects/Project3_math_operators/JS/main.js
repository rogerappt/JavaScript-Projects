function addition_Function () {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
function substraction_Function () {
    var Substraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Substraction;
}
function multiplication () {
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 = " + simple_Math;
}
function division () {
    var simple_Math = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
}
function more_Math () {           //Multiple Operations
    var simple_Math = (1+2) * 10 / 2 -5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then substract by 5 equals " + simple_Math;
}
function modulus_Operator () {          //Modulus Operator is the remainder after the dividend is divided by the divisor.
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a reminder of:" + simple_Math;
}
function negation_Operator () {         //Unary Operator. The syntax for the negation operator is “-” followed by the variable name.
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}
var X = 5;    //Increment - Increase with 1
X++;
document.write(X);
document.write("<br>");    //I use <br> for separate the results
var X = 5.25;     //Decrement - Decrease with 1
X--;
document.write(X);
window.alert(Math.random());      //Return a random number between 0 and 1
window.alert(Math.random()*100);  //Random number displayed between ___ and ___ (such as between 0 and 100)
window.alert("Math.PI :"+ Math.PI); //Returns PI

