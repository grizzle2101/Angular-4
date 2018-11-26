import {INCREMENT} from './actions'

export interface IAppState {
    counter: number;
}

//Exportable Initial State
export const INITIAL_STATE: IAppState = {
    counter: 0}

export function rootReducer(state: IAppState, action): IAppState{
    switch(action.type) {
        case INCREMENT: return {counter: state.counter + 1};
    }
    return state;
}