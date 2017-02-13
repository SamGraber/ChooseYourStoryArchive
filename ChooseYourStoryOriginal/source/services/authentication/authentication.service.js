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
var angular2_jwt_1 = require('angular2-jwt');
var store_service_1 = require('../store/store.service');
var Lock = (function () {
    function Lock() {
    }
    return Lock;
}());
exports.Lock = Lock;
var AuthenticationService = (function () {
    function AuthenticationService(store, lock) {
        this.store = store;
        this.lock = lock;
    }
    AuthenticationService.prototype.login = function () {
        var _this = this;
        var hash = this.lock.parseHash();
        if (hash) {
            if (hash.error) {
                console.log('There was an error logging in', hash.error);
            }
            else
                this.lock.getProfile(hash.id_token, function (err, profile) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    _this.store.set('profile', profile);
                    _this.store.set('id_token', hash.id_token);
                    _this.socket = io.connect();
                    _this.socket.on('connect', function () {
                        _this.socket.on('authenticated', function () {
                            console.log('Authenticated');
                        })
                            .emit('authenticate', { token: hash.id_token });
                        console.log('Connected');
                    });
                });
        }
        else {
            this.lock.show();
        }
    };
    AuthenticationService.prototype.logout = function () {
        this.store.set('profile', null);
        this.store.set('id_token', null);
    };
    AuthenticationService.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_service_1.Store, Lock])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map