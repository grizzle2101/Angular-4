//Section 2 - Tutorial 8 - Interfaces:
//How would we make this more modular and clean?
var drawPoint = function (x, y) {
};
drawPoint(5, 4);
//Method 1 - Method that Takes Point Object with X & Y Properties.
var maDraw = function (point) {
};
maDraw({
    x: 1,
    y: 2
});
var myDraw = function (point) {
    //Draw Stuff...
};
