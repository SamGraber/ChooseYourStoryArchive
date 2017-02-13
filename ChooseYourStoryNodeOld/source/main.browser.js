"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var angular2_jwt_1 = require('angular2-jwt');
var app_component_1 = require('./app.component');
var authentication_browser_1 = require('./services/authentication/authentication.browser');
var store_browser_1 = require('./services/store/store.browser');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    angular2_jwt_1.AUTH_PROVIDERS,
    store_browser_1.BROWSER_STORE_PROVIDERS,
    authentication_browser_1.BROWSER_AUTH_PROVIDERS,
]);
//# sourceMappingURL=main.browser.js.map