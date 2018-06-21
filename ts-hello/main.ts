//Section 2 - Tutorial 14 - Properties
//Task 1 - getX & setX
/*
class Point {
    constructor(private x?: number, private y?: number) {
    }
    draw()
    {
        console.log('Draw: X - ' + this.x + ', Y -' + this.y);
    }
    getX()
    {
        return this.x;
    }
    setX(value)
    {
        if(value < 0)
            throw new Error('Value Cannot be less than 0.');
        this.x = value;
    }
}
let point = new Point(1, 2);
point.draw();
point.setX(10);
point.getX();
point.draw();
*/


//Task 2 - Refactor - Use TypeScript Properties
//TypeScript Conventions - CamelCase for Method & variable names.
//From the outside X appears as a property, but internally it is really a method.
class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    draw()
    {
        console.log('Draw: X - ' + this._x + ', Y -' + this._y);
    }
    get x()
    {
        return this._x;
    }
    set x(value)
    {
        if(value < 0)
            throw new Error('Value Cannot be less than 0.');
        this._x = value;
    }
}

let point = new Point(1, 2);

point.draw();
point.x = 10;
point.draw();
