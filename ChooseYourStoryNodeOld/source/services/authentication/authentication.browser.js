"use strict";
var core_1 = require('@angular/core');
var authentication_service_1 = require('./authentication.service');
exports.BROWSER_AUTH_PROVIDERS = [
    core_1.provide(authentication_service_1.Lock, { useValue: new Auth0Lock('KxfQTaT9y7MloYXmaKNvzPf1fw1uVozZ', 'samgraber.auth0.com') }),
    authentication_service_1.AuthenticationService,
];
//# sourceMappingURL=authentication.browser.js.map