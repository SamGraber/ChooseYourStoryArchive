"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var StoreBackend = (function () {
    function StoreBackend() {
    }
    return StoreBackend;
}());
exports.StoreBackend = StoreBackend;
var Store = (function () {
    function Store(backend) {
        this.backend = backend;
    }
    Store.prototype.get = function (key) {
        return JSON.parse(this.backend[key]);
    };
    Store.prototype.set = function (key, value) {
        if (value == null) {
            this.backend.removeItem(key);
            return;
        }
        this.backend[key] = JSON.stringify(value);
    };
    Store = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [StoreBackend])
    ], Store);
    return Store;
}());
exports.Store = Store;
//# sourceMappingURL=store.service.js.map