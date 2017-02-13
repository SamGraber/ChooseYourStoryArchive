import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

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
	
	constructor(private store: Store
			, private lock: Lock) {}
	
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
				
				this.socket = io.connect();
				this.socket.on('connect', (): void => {
					this.socket.on('authenticated', (): void => {
						console.log('Authenticated');
					})
					.emit('authenticate', { token: hash.id_token });
					console.log('Connected');
				});
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
