//Tutorial 3 - My First TypeScript Application
function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);
//Tutorial 4 - Declaring Variables:
//Task 1 - Create Loop with VAR
var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
//Task 3 - Create Loop with LET
function doMoreThings() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
doMoreThings();
