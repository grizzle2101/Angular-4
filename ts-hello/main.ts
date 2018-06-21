//Section 2 - Tutorial 11 - Constructors:
//Task 1 - Create Constructor Method
class Point {
    x: number;
    y: number;
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw()
    {
        console.log('Draw: X - ' + this.x + ', Y -' + this.y);
    }
}

//Task 2 - Supply Values to Constructor
let point = new Point(5, 6);
point.draw();
