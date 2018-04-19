// Arrays Sum
var a = 7;

var b = 14;

var c = "21";

var d = '36';

var e = 42;

var result = a + b + Number(c) + Number(d) + e;

document.write(result + "<hr>");


var f = '1';

var g = 15;

var h = 8;

var i = "1";

var summe = Number(f) * g * h * Number(i);

document.write(summe + "<hr>");


var divide = result / summe;
document.write(divide + "<hr>");


var numbers = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];

document.write(numbers[1][1] + " " + numbers [4][2] + " " + numbers[5][3] + " " + numbers[2][3] + " " + numbers[2][1] + "<hr>");


var text = "With the online map of Vienna you can easily navigate through Vienna.";
var x = text.match(/Vienna/g);
document.write(x);

