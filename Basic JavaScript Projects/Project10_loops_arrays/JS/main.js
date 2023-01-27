/*let text = "";       //Assignment 50 - create a while loop.
let i = 0;
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("Call_Loop").innerHTML = text;*/

let text = "Hello World!";    //Challenge 3 - string length property
let length = text.length;
document.getElementById("string_lengt").innerHTML = length;

//Assignment 51 - for loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Assignment 52
function Array() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("array_Function").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//Assignment 53
function constant_function() {
    const Musical_Instrument = { type: "guitar", brand: "Fender", color: "black" };
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Assignment 54
function Assignment_54() {
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}

//Challenge 14
document.getElementById("Challenge_14").innerHTML = myFunction("John");
function myFunction(name) {
    return "Hello " + name;
}