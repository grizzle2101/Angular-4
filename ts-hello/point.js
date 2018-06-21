"use strict";
exports.__esModule = true;
//Task 1 - Create File & Move Class
//Task 2 - Turn Point into a Module.
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('Draw: X - ' + this._x + ', Y -' + this._y);
    };
    return Point;
}());
exports.Point = Point;
