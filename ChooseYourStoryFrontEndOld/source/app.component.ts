import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { SnippetListComponent } from './components/snippetList/snippetList.component';
import { SnippetComponent } from './components/snippet/snippet.component';

@Component({
	moduleId: module.id,
	selector: 'choose-your-story-app',
	templateUrl: 'app.component.html',
	directives: [SnippetComponent, SnippetListComponent, MD_TOOLBAR_DIRECTIVES],
})
export class AppComponent { }
