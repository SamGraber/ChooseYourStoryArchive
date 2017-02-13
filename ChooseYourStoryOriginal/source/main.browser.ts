import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { AuthHttp } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { BROWSER_AUTH_PROVIDERS } from './services/authentication/authentication.browser';
import { BROWSER_STORE_PROVIDERS } from './services/store/store.browser';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	provide(AuthHttp, { useClass: AuthHttp }),
	BROWSER_STORE_PROVIDERS,
	BROWSER_AUTH_PROVIDERS,
]);
