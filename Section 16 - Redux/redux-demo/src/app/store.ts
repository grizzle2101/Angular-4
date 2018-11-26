import {tassign} from 'tassign';
import {INCREMENT} from './actions'
import {Map} from 'immutable';

export interface IAppState {
    counter: number;}

export const INITIAL_STATE: IAppState = {
    counter: 0}

    //Task 2 - Refactor RootReducer for Immuteable Type:
    export function rootReducer(state: Map<string, any>, action):  Map<string, any>{
        switch(action.type) {
            case INCREMENT:
                return state.set('counter', state.get('counter') + 1);
        }
        return state;
    }