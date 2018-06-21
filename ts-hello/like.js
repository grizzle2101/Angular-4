"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    //Use Constructor Params
    function Like(_status, _counter) {
        if (_status === void 0) { _status = false; }
        if (_counter === void 0) { _counter = 0; }
        this._status = _status;
        this._counter = _counter;
    }
    Like.prototype.clickLike = function () {
        //Increment & Switch Status
        this._counter += (this._status) ? 1 : -1;
        console.log("You Like this(" + this._status + ") , Like Count - " + this._counter);
        this._status = !this._status;
    };
    return Like;
}());
exports.Like = Like;
