//Tutorial 3 - My First TypeScript Application
function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);
//Tutorial 4 - Declaring Variables:
//Task 1 - Create Loop with VAR
//Task 2 - Transpile & Run
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
//Task 3 - Create Loop with LET
//Task 4 - TransPile & Run
function doMoreThings() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
doMoreThings();
//Tutorial 5 - Types:
//Task 1 - Int to String 
var count = 5;
count = 'a';
//Task 2 - Not Assigning a Type.
var a;
a = 1;
a = true;
a = 'a';
//Task 3-  - Type Annotations:
var b;
var c;
var d;
var e; //Any Type
var f; //Number Array
var g = [1, true, 'a', false]; //Array of Any Type
b = true; //Warnings!
//Task 4 - Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
