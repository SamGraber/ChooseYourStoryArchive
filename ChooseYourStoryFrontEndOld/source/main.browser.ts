import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app.component';
import { snippetReducer } from './services/snippet/snippet.reducer'; 

bootstrap(AppComponent, [
	provideStore({
		snippets: snippetReducer,
	}),
	disableDeprecatedForms(),
	provideForms(),
]);
