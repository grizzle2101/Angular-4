import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux'; 
import { IAppState } from '../../store'; 
import { CLEAR_TODOS } from '../actions'; 
import { ITaskingState } from '../store';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  //These properties no longer exist...
  //@select() todos; 
  //@select() lastUpdate; 
  @select((s: ITaskingState) => s.todos) todos; 
  @select((s: ITaskingState) => s.lastUpdate) lastUpdate; 
  
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
