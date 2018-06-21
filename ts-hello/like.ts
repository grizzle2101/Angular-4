export class Like
{
    //Use Constructor Params
    constructor( private _status: boolean = false, private _counter: number = 0){
    }
    clickLike()
    {
        //Increment & Switch Status
        this._counter += (this._status) ? 1 : -1;
        console.log("You Like this(" + this._status + ") , Like Count - " + this._counter);
        this._status = !this._status;
    }
}