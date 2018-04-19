// Arrays
cars = ['Tesla', 'Audi', 'Renault', 'Volvo', 'Mazda', 'Fiat', 'Ferrari'];

document.write(cars.sort() + "<hr>");


// different methods - fruits Arrays
var fruits = ['apple', ' banana', ' kiwi'];

fruits.push(" orange");
document.write(fruits + "<br>");

fruits.pop("orange");
document.write(fruits + "<hr>");

// Animals
animals = ['monkey', ' horse', ' dog'];
document.write(animals.sort() + "<br>");


animals.unshift("cat");
document.write(animals + "<hr>");


// String manipulation
var b = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
var temp = new Array();
temp = b.split('/').join("<br>" + "<br>");

document.write(temp);