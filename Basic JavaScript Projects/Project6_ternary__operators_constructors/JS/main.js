function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Voter_Function() {
    var Adult, Can_vote;
    Adult = document.getElementById("Adult").value;
    Can_vote = (Adult < 18) ? "You are not old enough to vote" : "You can vote!";
    document.getElementById("Voter").innerHTML = Can_vote;
}

function Vehicle(Make, Model, Year, Color) {                //Assignment # 36
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}
function Phone(Make, Model, Year, Color) {               //Assignment #37
    this.Phone_Make = Make;                      //!!!!!After I add New_and_This, myFunction won't work properly
    this.Phone_Model = Model;
    this.Phone_Year = Year;
    this.Phone_Color = Color;
}
var Jack = new Phone("Samsung", "S20", 2020, "Grey");
var Emily = new Phone("Iphone", "14 pro max", 2022, "Gold");
var Erik = new Phone("Motorola", "Edge 30", 2023, "Black");
function newAndThisFunction() {
    document.getElementById("New_and_This").innerHTML =
        "Erik speak to " + Erik.Phone_Color + "-colored " + Erik.Phone_Model +
        " manufactured in " + Erik.Phone_Year;
}