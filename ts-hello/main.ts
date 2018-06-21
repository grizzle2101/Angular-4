class Point {
    x: number;
    y: number;

    draw()
    {
        console.log('Draw: X - ' + this.x + ', Y -' + this.y);
    }
    getDistance(another: Point)
    {
        //Distance Function
        console.log('GetDistance: X - ' + this.x + ', Y -' + this.y);
        console.log('GetDistance: X - ' + another.x + ', Y -' + another.y);
    }
}


//Section 2 - Tutorial 10 - Objects:
//Task 1 - Create Point Object
let point = new Point();
point.x = 1;
point.y = 2;

let secondPoint = new Point();
secondPoint.x = 5;
secondPoint.y = 6;

//Task 2 - Call Methods
point.draw();
point.getDistance(secondPoint);