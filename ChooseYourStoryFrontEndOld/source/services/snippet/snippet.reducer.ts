import { ActionReducer, Action } from '@ngrx/store';
import { List } from 'immutable';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';

export const snippetReducer: ActionReducer<List<string>> = (state: List<string> = List<string>(), action: Action) => {
	switch (action.type) {
		case ADD:
			return state.push(action.payload);

		case REMOVE:
			return state.remove(state.indexOf(action.payload));

		case UPDATE:
			return state.set(state.indexOf(action.payload.oldValue), action.payload.newValue);

		default:
			return state;
}
}