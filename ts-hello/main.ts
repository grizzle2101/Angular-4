//Section 2 - Tutorial 12 - Access Modifiers:
//What if we want to change it so the coordinated can never be changed?
//Task 1 - Apply Access Modifiers
class Point {
    private x: number;
    private y: number;
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }
    draw()
    {
        console.log('Draw: X - ' + this.x + ', Y -' + this.y);
    }
}

let point = new Point(5, 6);
point.draw();
