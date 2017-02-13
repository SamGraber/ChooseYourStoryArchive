import { Component } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { Store } from '@ngrx/store';

import { AppState } from '../../appState';
import { ADD } from '../../services/snippet/snippet.reducer';

@Component({
	moduleId: module.id,
	selector: 'csSnippet',
	templateUrl: 'snippet.component.html',
	directives: [MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES],
})
export class SnippetComponent {
	snippet: string;

	constructor(public store: Store<AppState>) {}

	addSnippet(): void {
		this.store.dispatch({
			type: ADD,
			payload: this.snippet,
		});
		this.snippet = '';
	}
}
