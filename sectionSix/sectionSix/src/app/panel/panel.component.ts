import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent 
{
  @Input('title')title : string;
  isExpanded : boolean;

  toggle()
  {
    this.isExpanded = !this.isExpanded;
  }
}
