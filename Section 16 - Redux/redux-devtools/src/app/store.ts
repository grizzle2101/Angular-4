import { tassign } from 'tassign'; 
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, CLEAR_TODOS } from './actions'; 

export interface IAppState {
  todos: any[];
  lastUpdate: Date; 
}

export const INITIAL_STATE: IAppState = { 
  todos: [],
  lastUpdate: null
}




class TodoActions {
  constructor(private state, private action){}

  addTodo(){
    var newTodo = { id: this.state.todos.length + 1, title: this.action.title };
    return tassign(this.state, {
      todos: this.state.todos.concat(newTodo),
      lastUpdate: new Date()
    });
  }

  toggleTodo() {
    var todo = this.state.todos.find(t => t.id === this.action.id);
    var index = this.state.todos.indexOf(todo);
  
    return tassign(this.state, {
      todos: [
        ...this.state.todos.slice(0, index),
  
        tassign(todo, { isCompleted: !todo.isCompleted }),
        ...this.state.todos.slice(index + 1),
      ],
      lastUpdate: new Date()
    });
  }
  
  removeTodo() {
    return tassign(this.state, {
      todos: this.state.todos.filter(t => t.id !== this.action.id),
      lastUpdate: new Date()
    });
  }
  
  clearTodos() {
    return tassign(this.state, {
      todos: [],
      lastUpdate: new Date()
    });
  }
}

export function rootReducer(state: IAppState, action): IAppState {
  //Task 1 - Refactor Fat Case Statements:
  var actions = new TodoActions(state, action);
  actions.addTodo();

  switch (action.type) {
    case ADD_TODO: return actions.addTodo();
    case TOGGLE_TODO: return actions.toggleTodo();
    case REMOVE_TODO: return actions.removeTodo();
    case CLEAR_TODOS: return actions.clearTodos();
  }
  return state; 
}