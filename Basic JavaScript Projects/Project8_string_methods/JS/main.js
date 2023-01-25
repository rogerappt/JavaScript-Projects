//Assignment 44    Concat() Method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//Assignment  45  Slice() Method   
function slice_Method() {
    var Sentence = "All work and no play makes Johny a dull boy.";
    var Section = Sentence.slice(27, 33);
    document.getElementById("Slice").innerHTML = Section;
}
//Challenge 10
//toUpperCase() method. The toUpperCase() method returns the value of the string converted to uppercase.
console.log("alphabet".toUpperCase()); // 'ALPHABET'
//Search() method. The search() method executes a search for a match between a regular expression and this String object.
// Taking input a string.
var string = "GeeksforGeeks";
// Taking a regular expression.
var re1 = /G/;
var re2 = /e/;
var re3 = /s/;
// Printing the index of matching alphabets
console.log(string.search(re1));
console.log(string.search(re2));
console.log(string.search(re3));
//Assignment 46 - Number Methods
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}    //This code would return “182”.
//Assignment 47 - toPrecision() Method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}   //The output would be “12938.30130”.
//Challenge 11
//toFixed() method - The toFixed() method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.
function toFixed_Method() {
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("to_fixed").innerHTML = n;
}  //toFixed() converts a number to a string, rounded to a specified number of decimals:6
//valueOf() method - The valueOf() method returns the primitive value of a string. The valueOf() method does not change the original string.
function valueOf_Method() {
    let text = "Hello World!";
    let result = text.valueOf();
    document.getElementById("value_of").innerHTML = result;
}  //valueOf() returns the primitive value of a string: