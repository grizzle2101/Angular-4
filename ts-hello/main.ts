
//Section 2 - Tutorial 9 - Classes:
//Cohesion: Our MyDraw Function, should be INSIDE the Interface. There should be cohesion between the related elements.
//These functions are probabaly going to be a series of related functions like getDistance DrawPoint etc.
//Task 1 - Move Methods into Interface
/*
interface Point{
    x: number,
    y: number,
    draw: () => void
}
*/

//Task 2 - Create Class to Contain Functions
class Point{
    x: number;
    y: number;
    draw()
    {
        //Draw Function
    }
    getDistance(another: Point)
    {
        //Distance Function
    }
}