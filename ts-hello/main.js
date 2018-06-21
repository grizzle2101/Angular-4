var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('Draw: X - ' + this.x + ', Y -' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //Distance Function
        console.log('GetDistance: X - ' + this.x + ', Y -' + this.y);
        console.log('GetDistance: X - ' + another.x + ', Y -' + another.y);
    };
    return Point;
}());
//Section 2 - Tutorial 10 - Objects:
//Task 1 - Create Point Object
var point = new Point();
point.x = 1;
point.y = 2;
var secondPoint = new Point();
secondPoint.x = 5;
secondPoint.y = 6;
//Task 2 - Call Methods
point.draw();
point.getDistance(secondPoint);
