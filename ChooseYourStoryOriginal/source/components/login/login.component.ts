import { Component } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: 'login.component.html',
})
export class LoginComponent {
	constructor(public authentication: AuthenticationService) {}
}