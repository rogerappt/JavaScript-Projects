//Display the data type of a variable of your choosing
document.write(typeof 3 + "<br>"); //Return the keyword number

document.write(3E310 + "<br>");    //Return Infinit
document.write(-3E310 + "<br>");   //Return -Infinit
document.write(10 < 2);            //Return False in Console       //!!!!!!Need to add <br> here
document.write("<br>");
document.write(10 > 2);            //Return True in Console        //!!!!!!Need to add <br> here
document.write("<br>");
console.log(2 + 2);
document.write("10" + 5);          //Coercion / Return 105
document.write("<br>");
console.log(10 < 2);               //Boolean
document.write("<br>");

//Write code using the following operators: ==, ===, >, <, &&, ||, !  and display them in the browser
document.write(10 == 10);
document.write("<br>");
document.write(3 == 11);
document.write("<br>");
//Return true by ensuring to match the data type and value.

//The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true.
document.write(5 > 10 || 10 > 4);    //OR || operator return “true” because, while 5 is not greater than 10, 10 is greater than 4. 
document.write("<br>");
document.write(5 > 10 || 10 > 20);   //or || operator return “false”
document.write("<br>");

X = 10;
Y = 10;
document.write(X === Y);
document.write("<br>");
//Return false by writing a different data type and different value.

X = "10";
Y = 11;
document.write(X === Y);
document.write("<br>");
//Return false by writing a different data type but the same value for both.
X = "10";
Y = 10;
document.write(X === Y);
document.write("<br>");
//Return false by writing the same data type but a different value for both.
X = 10;
Y = 11;
document.write(X === Y);
document.write("<br>");
document.write(5 > 2 && 10 > 4);    //AND operator display true 
document.write("<br>");
document.write(5 > 2 && 10 < 4);    //AND operator display false when one of two are false
document.write("<br>");
document.write(5 > 10 && 10 > 4);   //AND operator display truebecause, while 5 is not greater than 10, 10 is greater than 4
document.write("<br>");
document.write(5 > 10 && 10 > 20);  //AND operator display false
document.write("<br>");
function not_Function() {           //The ! (not) operator checks whether or not something is true. If ___ is false, “true” will be returned.
    document.getElementById("Not").innerHTML = !(5 > 10);    //This would return “True”.
}
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);    //This would return “False”.
}

//Write an expression combining a string and a number
let myAge = 85;
console.log("I am " + myAge + " years old.");   // Return I am 85 years old.