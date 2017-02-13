import { Component } from '@angular/core';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { Store } from '@ngrx/store';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AppState } from '../../appState';
import { REMOVE, UPDATE } from '../../services/snippet/snippet.reducer';

@Component({
	moduleId: module.id,
	selector: 'csSnippetList',
	templateUrl: 'snippetList.component.html',
	directives: [MD_INPUT_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES],
})
export class SnippetListComponent {
	snippets: Observable<List<string>>;
	activeSnippet: string;
	updatedSnippet: string;

	get noSnippets(): Observable<boolean> {
		return this.snippets.map(x => x.isEmpty());
	}

	constructor(public store: Store<AppState>) {
		this.snippets = store.select<List<string>>('snippets');
	}

	edit(snippet: string): void {
		this.activeSnippet = snippet;
		this.updatedSnippet = snippet;
	}

	cancel(): void {
		this.activeSnippet = '';
		this.updatedSnippet = '';
	}

	isActive(snippet: string): boolean {
		return this.activeSnippet === snippet;
	}

	updateSnippet(): void {
		this.store.dispatch({
			type: UPDATE,
			payload: {
				oldValue: this.activeSnippet,
				newValue: this.updatedSnippet,	
			},
		});
		this.activeSnippet = '';
		this.updatedSnippet = '';
	}

	removeSnippet(snippet: string): void {
		this.store.dispatch({
			type: REMOVE,
			payload: snippet,
		});
	}
}
