//Tutorial 3 - My First TypeScript Application
function log(message)
{
    console.log(message);
}
var message = "Hello World";

log(message);

//Tutorial 4 - Declaring Variables:
//Task 1 - Create Loop with VAR
//Task 2 - Transpile & Run

function doSomething()
{
    for(var i=0; i < 5; i++)
    {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

//Task 3 - Create Loop with LET
//Task 4 - TransPile & Run
function doMoreThings()
{
    for(let i=0; i < 5; i++)
    {
        console.log(i);
    }
    console.log('Finally: ' + i);
}

doSomething();
doMoreThings();

//Tutorial 5 - Types:
//Task 1 - Int to String 
let count = 5;
count = 'a';

//Task 2 - Not Assigning a Type.
let a;
a = 1;
a = true;
a = 'a';

//Task 3-  - Type Annotations:
let b: number;
let c: boolean;
let d: string;
let e: any; //Any Type
let f:number[]; //Number Array
let g:any[] = [1, true, 'a', false]; //Array of Any Type

b = true; //Warnings!

//Task 4 - Enums
enum Color{Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Blue;