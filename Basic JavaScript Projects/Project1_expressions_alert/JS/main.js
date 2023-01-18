//Use the window.alert() and document.write() methods.
window.alert ("Helo World");
document.write("Hello World"+"<br>");   
//Assign string values to two variables and concatenate the variables together.
function myFunction () {
    var sentence = "I am learning";
    var sentence2 = "a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence+sentence2;    //I Concatonate 2 sentences.
}
//Assign a color to at least one variable using the fontcolor() method.
var B = ("\"What is JavaScript? "
+ "-JavaScript is a scripting language that enables you to create dynamically updating content;"
+ "-Control multimedia, animate images;" 
+ "-And pretty much everything else.\""+"<br>");
 document.write (B);
var blues = ("Name = Marius, Age = 37, + Email = me@test.com, + Address = myHome");
var blues = blues.fontcolor("blue");   //Fontcolor it is used now style.color/ Here I use text color.
document.write (blues+"<br>");
//Write an expression.
document.write(100 + 37);     // This is an expression
//Add comments throughout your JavaScript explaining your code.



