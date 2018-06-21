//Section 2 - Tutorial 13 - Access Modifiers in Construcors
//Task 1 - Remove instantiation & Assignment of X & Y
//Task 2 - Apply Access Modifiers on Constructor Directly
class Point {
    constructor(private x?: number, private y?: number) {
    }
    draw()
    {
        console.log('Draw: X - ' + this.x + ', Y -' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();
