//Section 2 - Tutorial 13 - Access Modifiers in Construcors
//Task 1 - Remove instantiation & Assignment of X & Y
//Task 2 - Apply Access Modifiers on Constructor Directly
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('Draw: X - ' + this.x + ', Y -' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
