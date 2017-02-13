"use strict";
var core_1 = require('@angular/core');
var store_service_1 = require('./store.service');
exports.BROWSER_STORE_PROVIDERS = [
    core_1.provide(store_service_1.StoreBackend, { useValue: localStorage }),
    store_service_1.Store,
];
//# sourceMappingURL=store.browser.js.map