//Section 2 - Tutorial 12 - Access Modifiers:
//What if we want to change it so the coordinated can never be changed?
//Task 1 - Apply Access Modifiers
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
var point = new Point(5, 6);
point.draw();
