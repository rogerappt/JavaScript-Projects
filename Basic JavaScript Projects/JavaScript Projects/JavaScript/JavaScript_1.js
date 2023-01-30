function Color_Function() {    //Assignment #56
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purble" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//Assignment # 57
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has chenged!";
}

//Challenge #16
var c = document.getElementById("myCanvas");     //HTML Canvas
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

window.onload = function () {       //HTML Canvas Reference
    var c1 = document.getElementById("myCanvas1");
    var ctx1 = c1.getContext("2d");
    var img = document.getElementById("scream");
    ctx1.drawImage(img, 10, 10);
}

//Challenge #17
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");
var grd = ctx2.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx2.fillStyle = grd;
ctx2.fillRect(20, 20, 150, 100);

