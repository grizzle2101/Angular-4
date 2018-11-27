import {tassign} from 'tassign';
import { stat } from 'fs';

//State
export interface IAppState {
     todos: Todo[];
}

export interface Todo {
    id: number;
    title: string;
}

//Default State
export const INITIAL_STATE: IAppState = {
    todos: []
}

//Reducer
export function rootReducer(state: IAppState, action) : IAppState {
    switch(action.type)
    {
        //Add Item
        case "ADD_ITEM":
            console.log(action.todo)
            return tassign(state, {todos: state.todos.concat(action.todo)})
        
        //Remove Item
        case "REMOVE_ITEM":
            return tassign(state, {todos: state.todos.filter(item => item.id !== action.todo.id)})
        
        //Update Item
        case "DELETE_ALL":
            return tassign(state, {todos: []});
    }
    return state;
}