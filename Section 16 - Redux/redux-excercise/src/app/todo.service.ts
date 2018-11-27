import { Injectable, EventEmitter } from '@angular/core'; 
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { Observable } from 'rxjs/Observable';


// The two components we have in this app (TodoList and TodoDashboard) do not have a parent/child
// relationship. Whilst we can enforce this relationship in this app, there are cases where two 
// components are not conceptually in a parent/child relationship. In such cases, in order to
// communicate between two components, we need to use a service. If this service is injected 
// in the module where these two components belong, there is only a single instance of this 
// service in the memory (singleton). So, we can use that to keep the shared state and also to 
// publish events as one component makes changes to the state. This is a perfectly valid solution 
// and works well for small applications. But as your application grows in size and complexity, 
// you need a more scalable solution, and that's where Redux shines. 
// 
// So here is one implementation of such service. This is not necessarily the best implementation.
// Here, we are storing the list of todo items because it's something that both components are 
// interested in. TodoDashboard also has an additional field (lastUpdate) which is not used 
// anywhere else. 
// 
// In this service, as we add, toggle and remove items, we publish an event using EventEmitter. 
// We subscribe to these events in TodoDashboard to be notified of changes and update the internal
// component state accordingly. 
//
// Note that this service is in some ways similar to the "store" we have in Redux. In both 
// implementations we have our state in one place. Redux provides a more elegant and scalable 
// solution to maintain state in a predictable way. It also makes it easier to implement features
// like undo/redo, plus we get great tools for debugging our application as you'll see in the 
// next lecture. 

@Injectable()
export class TodoService {

  private todos = [];
  public todoAdded = new EventEmitter();
  public todoToggled = new EventEmitter();
  public todoRemoved = new EventEmitter();
  public todosCleared = new EventEmitter();

  //Add Redux
  //Using Constructor as Select Module not working.
  constructor(private ngRedux: NgRedux<IAppState>){
    ngRedux.subscribe(() => {
       this.todos = ngRedux.getState().todos;
    });
  }

  //Add Item
  addTodo(title)
  {
    var todo = { id: this.todos.length + 1, title: title };
    this.ngRedux.dispatch({type: "ADD_ITEM", todo});

     //Notify Dashboard
    this.todoAdded.emit(todo);
  }

  //Remove Item
  removeTodo(todo) {
    console.log(todo);
    this.ngRedux.dispatch({type: "REMOVE_ITEM", todo});

    //Notify Dashboard
    this.todoRemoved.emit(todo);
  }

  //Clear Items
  clearTodos() {
    this.todos = [];
    console.log("Clearing List");
    this.ngRedux.dispatch({type: "DELETE_ALL"});

     //Notify Dashboard
    //this.todosCleared.emit();
  }


  toggleTodo(todo) {
    todo.isCompleted = !todo.isCompleted;
    this.todoToggled.emit(todo);
  }

  getTodos() { 
    return this.todos;
  }

  /*
  clearTodos() {
    this.todos = [];
    this.todosCleared.emit();
  }
  */
}