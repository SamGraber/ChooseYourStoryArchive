import { provide, Provider } from '@angular/core';
import { AuthenticationService, Lock } from './authentication.service';

declare var Auth0Lock: any;

export const BROWSER_AUTH_PROVIDERS = [
	provide(Lock, { useValue: new Auth0Lock('KxfQTaT9y7MloYXmaKNvzPf1fw1uVozZ', 'samgraber.auth0.com') }),
	AuthenticationService,
]