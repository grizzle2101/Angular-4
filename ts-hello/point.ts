//Task 1 - Create File & Move Class
//Task 2 - Turn Point into a Module.
export class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    draw()
    {
        console.log('Draw: X - ' + this._x + ', Y -' + this._y);
    }
}