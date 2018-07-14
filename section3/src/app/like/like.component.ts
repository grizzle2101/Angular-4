import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent 
{
@Input("likesCount") LikesCount : number = 1;
@Input("isActive") isActive : boolean = false;
@Output("change") change = new EventEmitter();

onClick(){
  console.log("Component Clicked!");
  this.LikesCount += (this.isActive) ? -1 : 1;
  this.isActive = !this.isActive;
  this.change.emit({newValue: this.isActive});
}
}

export interface LikeEventArgs
{
  newValue : boolean
}
