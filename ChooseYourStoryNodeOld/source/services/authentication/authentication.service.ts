import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { tokenNotExpired, AuthHttp } from 'angular2-jwt';

import { Store } from '../store/store.service';

export abstract class Lock {
	abstract parseHash(): any;
	abstract show(): void;
	abstract getProfile(id: string, callback: Function);
}

declare var io: any;

@Injectable()
export class AuthenticationService {
	socket: SocketIO.Socket;
	
	get profile(): any {
		return this.store.get('profile');
	}
	
	constructor(private store: Store
			, private lock: Lock
			, private authHttp: AuthHttp) {}
	
	login(): void {
		const hash = this.lock.parseHash();
		if (hash) {
			if (hash.error) {
				console.log('There was an error logging in', hash.error);
			}
			else
				this.lock.getProfile(hash.id_token, (err: string, profile) => {
				if (err) {
					console.log(err);
					return;
				}
				this.store.set('profile', profile);
				this.store.set('id_token', hash.id_token);
				console.log(profile);
				
				this.socket = io.connect();
				this.socket.on('connect', (): void => {
					this.socket.on('authenticated', (): void => {
						console.log('Authenticated');
					})
					.emit('authenticate', { token: hash.id_token });
					console.log('Connected');
				});
				// this.authHttp.get('https://samgraber.auth0.com/api/v2/users/' + profile.identities[0].user_id, { headers: new Headers({ 'Content-Type': 'application/json'})}).subscribe((response: any) => console.log(response.json()));
			});
		} else {
			this.lock.show();
		}
	}

	logout(): void {
		this.store.set('profile', null);
		this.store.set('id_token', null);
	}

	loggedIn(): boolean {
		return tokenNotExpired();
	}
}
