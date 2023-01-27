//Assignment 39
/*var X = 10;                              //Global variable. This code would return “30” and “110.
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
document.write("<br>");*/
function Add_numbers_1() {               //Local variable. This code would return “30” because the variable was local – meaning it was written within the function Add_numbers_1 and couldn’t be accessed outside of it.
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

/*function Add_numbers_1() {              //code in the browser, no result will be shown. But if you open the console, you’ll see the error “X is not defined.”
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();*/

//Assignment  40
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//Assignment 41 - write your own if statemen  
function if_Statement() {
    const age = 18;
    if (age >= 18) {
        document.getElementById("Age").innerHTML = "Nick is an adult.";
    } else {
        document.getElementById("Age").innerHTML = "Nick is a child.";
    }
}

function Age_Function() {               //Assignment 42  
    age = document.getElementById("Ages").value;
    if (age >= 18) {
        Vote = "You are old enuough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

//Assignment 43
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

