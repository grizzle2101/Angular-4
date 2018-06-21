//Section 2 - Tutorial 9 - Classes:
//Cohesion: Our MyDraw Function, should be INSIDE the Interface. There should be cohesion between the related elements.
//These functions are probabaly going to be a series of related functions like getDistance DrawPoint etc.
//Task 1 - Move Methods into Interface
/*
interface Point{
    x: number,
    y: number,
    draw: () => void
}
*/
//Task 2 - Create Class to Contain Functions
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //Draw Function
    };
    Point.prototype.getDistance = function (another) {
        //Distance Function
    };
    return Point;
}());
