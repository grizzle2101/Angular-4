//Section 2 - Tutorial 8 - Interfaces:
//How would we make this more modular and clean?
let drawPoint = (x ,y) =>
{

}
drawPoint(5, 4);

//Method 1 - Method that Takes Point Object with X & Y Properties.
let maDraw = (point: {x: number, y: number}) =>
{

}

maDraw ({
    x: 1,
    y: 2
})


//Method 2 - OO way, Method Using Interface
//Notice Naming Convention Pascal Case.
//Delcare Interface
interface Point{
    x: number,
    y: number
}

let myDraw = (point: Point) =>
{
    //Draw Stuff...
}