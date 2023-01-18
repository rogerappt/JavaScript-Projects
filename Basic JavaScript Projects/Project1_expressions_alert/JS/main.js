//var B = ("\"What is JavaScript? "
//+ "-JavaScript is a scripting language that enables you to create dynamically updating content;"
//+ "-Control multimedia, animate images;" 
//+ "-And pretty much everything else.\"");
// document.write (B)
//var blues = ("Name = Marius, Age = 37, + Email = me@test.com, + Address = myHome");
//var blues = blues.fontcolor("blue");
//document.write (blues);
//100 + 37
//document.write(100 + 37)
function My_First_Function () {                               //Defining a function and naming it
    var str = "This text is green!";                          //Defining a variable and giving it a string value
    var result = str.fontcolor("green");                      //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTML element with "Green_Text" id
}