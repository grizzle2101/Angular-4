//Section 2 - Tutorial 11 - Constructors:
//Task 1 - Create Constructor Method
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
//Task 2 - Supply Values to Constructor
var point = new Point(5, 6);
point.draw();
