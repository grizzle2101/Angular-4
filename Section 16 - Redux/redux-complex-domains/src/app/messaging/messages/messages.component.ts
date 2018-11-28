import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { IAppState } from '../../store'; 
import { INCREMENT, DECREMENT } from '../actions'; 
import { IMessagingState } from '../store';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {
  @select((s: IMessagingState) => s.newMessages) newMessages; 

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  increment() { 
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() { 
    this.ngRedux.dispatch({ type: DECREMENT });
  }
}
